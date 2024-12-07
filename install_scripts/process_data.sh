#!/bin/bash
# Step 3: Process NCBI files for JBrowse

cd ~/tmp
# H1N1 1934
gunzip GCF_000865725.1_ViralMultiSegProj15521_genomic.fna.gz
mv GCF_000865725.1_ViralMultiSegProj15521_genomic.fna GCF_000865725.1.fa
samtools faidx GCF_000865725.1.fa

gunzip GCF_000865725.1_ViralMultiSegProj15521_genomic.gff.gz
jbrowse sort-gff GCF_000865725.1_ViralMultiSegProj15521_genomic.gff > H1N1_1934_genes.gff
bgzip H1N1_1934_genes.gff
tabix H1N1_1934_genes.gff.gz

# H1N1 2009
gunzip GCF_001343785.1_ViralMultiSegProj274766_genomic.fna.gz
mv GCF_001343785.1_ViralMultiSegProj274766_genomic.fna GCF_001343785.1.fa
samtools faidx GCF_001343785.1.fa

gunzip GCF_001343785.1_ViralMultiSegProj274766_genomic.gff.gz
jbrowse sort-gff GCF_001343785.1_ViralMultiSegProj274766_genomic.gff > H1N1_2009_genes.gff
bgzip H1N1_2009_genes.gff
tabix H1N1_2009_genes.gff.gz

# H3N2
gunzip GCF_000865085.1_ViralMultiSegProj15622_genomic.fna.gz
mv GCF_000865085.1_ViralMultiSegProj15622_genomic.fna GCF_000865085.1.fa
samtools faidx GCF_000865085.1.fa

gunzip GCF_000865085.1_ViralMultiSegProj15622_genomic.gff.gz
jbrowse sort-gff GCF_000865085.1_ViralMultiSegProj15622_genomic.gff > H3N2_genes.gff
bgzip H3N2_genes.gff
tabix H3N2_genes.gff.gz

# Hg38
gunzip Homo_sapiens.GRCh38.dna_sm.primary_assembly.fa.gz
mv Homo_sapiens.GRCh38.dna_sm.primary_assembly.fa hg38.fa
samtools faidx hg38.fa

gunzip Homo_sapiens.GRCh38.110.chr.gff3.gz
jbrowse sort-gff Homo_sapiens.GRCh38.110.chr.gff3 > hg38_genes.gff
bgzip genes.gff
tabix genes.gff.gz

# Filter BED file for GWAS viewing (NOTE: if your bed file is located in a different location, change the path as needed)
tabix -0 -b 2 -s 1 -e 2 -f ../data/influenzaGWAS.bed.gz
