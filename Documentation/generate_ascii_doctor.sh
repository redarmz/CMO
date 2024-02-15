#!/bin/bash

# Exécuter le script Python pour générer Matrice2_Python_output.txt
python3 Matrice2.py

# Exécuter le script Ruby pour générer MatriceRuby.txt
ruby Matrice2.rb

# Convertir les fichiers PDF en images
convert -density 300 MatriceFeatures.pdf MatriceFeatures.png

# Convertir la première page du document "Agilite.pdf" en image
convert -density 300 Agilite.pdf[0] Agilite_page_1.png

# Convertir la deuxième page du document "Agilite.pdf" en image
convert -density 300 Agilite.pdf[1] Agilite_page_2.png

# Convertir la troisième page du document "Agilite.pdf" en image
convert -density 300 Agilite.pdf[2] Agilite_page_3.png

# Générer le fichier ASCII Doctor
echo "= Ca Mange Oùùù" > project.adoc
echo ":doctype: book" >> project.adoc  # Ajout de la déclaration de doctype
echo "" >> project.adoc
cat ../README.md >> project.adoc  # ajustement du chemin
echo "" >> project.adoc

echo "== Fichiers" >> project.adoc

echo "=== Matrice Contribution en Python" >> project.adoc
echo "[source,txt]" >> project.adoc
echo "----" >> project.adoc
cat Matrice2_Python_output.txt >> project.adoc
echo "----" >> project.adoc
echo "" >> project.adoc

echo "=== Matrice Contribution en Ruby" >> project.adoc
echo "[source,txt]" >> project.adoc
echo "----" >> project.adoc
cat MatriceRuby.txt >> project.adoc
echo "----" >> project.adoc
echo "<<<" >> project.adoc
echo "" >> project.adoc

echo "=== MatriceFeatures" >> project.adoc
echo "[image,png]" >> project.adoc
echo "image::MatriceFeatures.png[]" >> project.adoc
echo "" >> project.adoc

echo "=== Agilite - Page 1" >> project.adoc
echo "[image,png]" >> project.adoc
echo "image::Agilite_page_1.png[]" >> project.adoc
echo "" >> project.adoc

echo "=== Agilite - Page 2" >> project.adoc
echo "[image,png]" >> project.adoc
echo "image::Agilite_page_2.png[]" >> project.adoc
echo "" >> project.adoc

echo "=== Agilite - Page 3" >> project.adoc
echo "[image,png]" >> project.adoc
echo "image::Agilite_page_3.png[]" >> project.adoc
echo "" >> project.adoc

# Convertir le fichier ASCII Doctor en PDF
asciidoctor-pdf project.adoc -o documentation.pdf

echo "Fichier PDF généré avec succès : documentation.pdf"
