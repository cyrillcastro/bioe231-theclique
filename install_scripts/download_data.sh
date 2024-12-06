#!/bin/bash
# Step 2: Download NCBI files

cd ~/tmp
# Download H1N1 1934 influenza assembly and annotation
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/865/725/GCF_000865725.1_ViralMultiSegProj15521/GCF_000865725.1_ViralMultiSegProj15521_genomic.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/865/725/GCF_000865725.1_ViralMultiSegProj15521/GCF_000865725.1_ViralMultiSegProj15521_genomic.gff.gz

# Download H1N1 2009 influenza assembly and annotation
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/001/343/785/GCF_001343785.1_ViralMultiSegProj274766/GCF_001343785.1_ViralMultiSegProj274766_genomic.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/001/343/785/GCF_001343785.1_ViralMultiSegProj274766/GCF_001343785.1_ViralMultiSegProj274766_genomic.gff.gz

# Download H3N2 infleunza assembly and annotation
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/865/085/GCF_000865085.1_ViralMultiSegProj15622/GCF_000865085.1_ViralMultiSegProj15622_genomic.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/865/085/GCF_000865085.1_ViralMultiSegProj15622/GCF_000865085.1_ViralMultiSegProj15622_genomic.gff.gz