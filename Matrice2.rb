import os
import git

repo_path = os.getcwd()

repo = git.Repo(repo_path)

contributor_stats = {}

for commit in repo.iter_commits():
    author = commit.author.email
    if author not in contributor_stats:
        contributor_stats[author] = {'commits': set(), 'lines_added': 0, 'lines_removed': 0, 'back_end': 0, 'front_end': 0, 'principal': 0}
    
    contributor_stats[author]['commits'].add(commit.hexsha)
    
    for item in commit.stats.files.items():
        filename, stats = item

        location = None
        if filename.startswith("Back_end"):
            location = 'back_end'
        elif filename.startswith("Front_end"):
            location = 'front_end'
        else:
            location = 'principal'
        
        contributor_stats[author][location] += stats['insertions'] - stats['deletions']
        contributor_stats[author]['lines_added'] += stats['insertions']
        contributor_stats[author]['lines_removed'] += stats['deletions']

print("Contributeur | Commits | Lignes ajoutées | Lignes supprimées | Back-end | Front-end | Principal")
for contributor, stats in contributor_stats.items():
    print(f"{contributor} | {len(stats['commits'])} | {stats['lines_added']} | {stats['lines_removed']} | {stats['back_end']} | {stats['front_end']} | {stats['principal']}")

