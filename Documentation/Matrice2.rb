require 'rugged'
require 'pathname'
require 'set'

repo_path = Pathname.new(Dir.pwd).parent

repo = Rugged::Repository.new(repo_path)

contributor_stats = Hash.new { |hash, key| hash[key] = { 'commits' => Set.new, 'lines_added' => 0, 'lines_removed' => 0, 'back_end' => 0, 'front_end' => 0, 'principal' => 0 } }

repo.walk(repo.last_commit.oid) do |commit|
  author = commit.author[:email]
  commit.diff.each_patch do |patch|
    location = nil
    filename = patch.delta.old_file[:path]
    if filename.start_with?("Back_end")
      location = 'back_end'
    elsif filename.start_with?("Front_end")
      location = 'front_end'
    else
      location = 'principal'
    end
    contributor_stats[author]['commits'].add(commit.oid)
    contributor_stats[author][location] += patch.additions - patch.deletions
    contributor_stats[author]['lines_added'] += patch.additions
    contributor_stats[author]['lines_removed'] += patch.deletions
  end
end

# Ouverture du fichier pour écrire
File.open(File.join(File.dirname(__FILE__), 'MatriceRuby.txt'), 'w') do |file|
  file.puts "Contributeur | Commits | Lignes ajoutées | Lignes supprimées | Back-end | Front-end | Principal"
  contributor_stats.each do |contributor, stats|
    file.puts "#{contributor} | #{stats['commits'].length} | #{stats['lines_added']} | #{stats['lines_removed']} | #{stats['back_end']} | #{stats['front_end']} | #{stats['principal']}"
  end
end
