# bioe231-theclique
BioE 231 The Clique Final Project

This is the JBrowse configuration for viewing data related to influenza, specifically the H1N1 and H3N2 strains. In order to set up the database properly, make sure you are using a Debian or Ubuntu distribution. Then go ahead and install linuxbrew, using code block below:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> /home/ubuntu/.bashrc
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/ubuntu/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```
If you need to set up a sudo password, follow the code block below:
```
sudo su -
passwd ubuntu 
```
After typing in your password following the UNIX password prompt, make sure to type ```exit``` to exit root.

Finally, use the following scripts in the install_scripts folder as listed (NOTE: you may need to change the APACHE_ROOT, GWAS file, and phylogenetic tree file paths, which are noted in steps 1, 3, and 4. Additionally, if you are having issues with running the scripts, you will need to change the permissions of the scripts with the following command: ```chmod u+x $script_name```):
1. setup_environment.sh
2. download_data.sh
3. process_data.sh
4. add_to_jbrowse.sh

### JBrowse Genome Viewing:

To view the UCSC data associated with the strains, open the track selector, click on the menu next to the search bar, and go to "turn on/off tracks" in connections. Afterwards, you can turn on connections associated with the strain you wish to view. Additionally, you can turn on the GWAS annotations under the available tracks when viewing the hg38 assembly.

As reference, the following RefSeq IDs correspond to the following influenza strains:
- GCF_001343785.1: H1N1 (2009)
- GCF_000865725.1: H1N1 (1934)
- GCF_000865085.1: H3N2

### Protein Viewing:
In order to view the protein sequences associated with influenza, please download the Protein3d plugin from the plugin store. Afterwards, launch a protein viewing panel, then click on the toggle controls option on the right. Finally, enter the following IDs to view any of the following proteins, with "PDB" as the source:

| Gene   | Protein                   | PDB ID                                                                 |
|--------|---------------------------|------------------------------------------------------------------------|
| PB2    | Polymerase pb2            | 7AS0                           |
| PB1    | Polymerase pb1            | 4MJS                       |
| PB1-F2 | PB1-F2 protein            | 2HN8                         |
| PA     | Polymerase PA             | 4IUJ                         |
| PA-X   | Modified version of PA    | 6WHM                        |
| HA     | Hemagglutinin             | 6GOL                        |
| NP     | Nucleoprotein             | 5B7B                         |
| NA     | Neuraminidase             | 8E6J                       |
| M2     | Matrix protein 2          | 1NYJ                          |
| M1     | Matrix protein 1          | 3MD2                         |
| NS1    | Nonstructural protein 1   | 2N74                         |
| NEP    | Nuclear export protein    | 2QPJ                         |

### Multiple Sequence Alignment and Phylogenetic Tree Viewing:
To examine how the hemagglutinin gene has changed over time, we obtained hemagglutinin's protein sequences from 1918-2012 from <a href="https://www.ncbi.nlm.nih.gov/genomes/FLU/Database/nph-select.cgi?go=database/">NCBI's Influenza Virus Resource</a>. Next, we performed multiple sequence alignment on the files using MAFFT after sorting them by year from earliest to latest. This data was then used to build a phylogenetic tree to help us better visualize any pattern.

In order to view the provided multiple sequence alignment file (aligned_HA_protein_sequences.fa), please download the MsaView plugin from the plugin store. Afterwards, launch a multiple sequence alignment viewing panel, then upload the attached file (which should be in the data folder) under "MSA file or URL" after choosing the file upload option (Information on how this file was generated is included below).

Similarly, in order to view the provided phylogenetic tree file (HA_protein_1918-2012_phylotree.nh), please launch a multiple sequence alignment viewing panel, then upload the attached file (which should be in the data folder) under "Tree file or URL" after choosing the file upload option. The file should be unzipped in the data folder after running the process_data.sh script. 

Steps on how these files were generated:

1) Downloading and preparing the data from NCBI
To download the data, we filtered out the data on this database using criteria: Keyword = "H1N1", Sequence type = "Protein", Type = "A", Host = "human", Country/Region = "United States", protein = "HA", subtype = "any", collection year = "1918-2012", Get sequences from "Pandemic (H1N1) viruses and "Lineage defining strains". The data was then downloaded as a FASTA file with FASTA defline customized as >{year}_{accession}. We then sort

Then, we sorted the data based on years using the code below:

"code part"

2) Installing MAFFT and using MAFFT to perform multiple sequence alignment

"code part"

3) Building the phylogenetic tree

This data from NCBI was then used to generate a phylogenetic tree using <a href="https://mafft.cbrc.jp/alignment/server/">this website</a>. 

### Working Example of the JBrowse Genome Browser:
If you would like to try out our genome browser before installing, you can do so at the following link: <a href="https://mluo123.github.io/bioe231-theclique/jbrowse2/">https://mluo123.github.io/bioe231-theclique/jbrowse2/</a>
