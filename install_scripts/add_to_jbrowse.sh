#!/bin/bash
# Step 4: Add files to JBrowse
## NOTE: change APACHE_ROOT as appropriate if needed

cd ~/tmp
export APACHE_ROOT=/opt/homebrew/var/www

# Adding assemblies and gene tracks
jbrowse add-assembly GCF_000865725.1.fa --out $APACHE_ROOT/jbrowse2 --load copy
jbrowse add-track H1N1_1934_genes.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy --assemblyNames GCF_000865725.1

jbrowse add-assembly GCF_001343785.1.fa --out $APACHE_ROOT/jbrowse2 --load copy
jbrowse add-track H1N1_2009_genes.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy --assemblyNames GCF_001343785.1

jbrowse add-assembly GCF_000865085.1.fa --out $APACHE_ROOT/jbrowse2 --load copy
jbrowse add-track H3N2_genes.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy --assemblyNames GCF_000865085.1

jbrowse add-assembly hg38.fa --out $APACHE_ROOT/jbrowse2 --load copy
jbrowse add-track hg38_genes.gff.gz --out $APACHE_ROOT/jbrowse2 --load copy --assemblyNames hg38

jbrowse text-index --out $APACHE_ROOT/jbrowse2

# Add connections
jbrowse add-connection https://hgdownload.soe.ucsc.edu/hubs/GCF/000/865/725/GCF_000865725.1/hub.txt --assemblyNames GCF_000865725.1 --out $APACHE_ROOT/jbrowse2 --name H1N1_1934
jbrowse add-connection https://hgdownload.soe.ucsc.edu/hubs/GCF/001/343/785/GCF_001343785.1/hub.txt --assemblyNames GCF_001343785.1 --out $APACHE_ROOT/jbrowse2 --name H1N1_2009
jbrowse add-connection https://hgdownload.soe.ucsc.edu/hubs/GCF/000/865/085/GCF_000865085.1/hub.txt --assemblyNames GCF_000865085.1 --out $APACHE_ROOT/jbrowse2 --name H3N2
