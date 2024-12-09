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

To examine how the hemagglutinin gene has changed over time, we obtained hemagglutinin's protein sequences from 1918-2012 from <a href="https://www.ncbi.nlm.nih.gov/genomes/FLU/Database/nph-select.cgi?go=database/">NCBI's Influenza Virus Resource</a>. We chose this timeline to include the pandemics. 

Summary of what we did and the resulting file (which are available for downloads in our data folder) after each step:

1) Download the original data from NCBI (HA_protein_sequences-1918-2012.fa)
2) Reorder the sequences by year, earliest to latest (ordered_HA_protein_sequences.fa)
3) Perform multiple sequence alignment on the ordered sequences using MAFFT (aligned_HA_protein_sequences.fa). 
4) Build a phylogenetic tree on the MAFFT website (HA_protein_1918-2012_phylotree.nh.gz - we compressed it for quicker submission)

How to View The Data on Jbrowse

In order to view the provided multiple sequence alignment file (aligned_HA_protein_sequences.fa), please download the MsaView plugin from the plugin store. Afterwards, launch a multiple sequence alignment viewing panel, then upload the file (aligned_HA_protein_sequences.fa, which should be in the data folder) under "MSA file or URL" after choosing the file upload option (Details on how this file was generated is included below).

Similarly, in order to view the provided phylogenetic tree file (HA_protein_1918-2012_phylotree.nh.gz), please launch a multiple sequence alignment viewing panel, then upload the attached file (also in the data folder) under "Tree file or URL" after choosing the file upload option. The file should be unzipped in the data folder after running the process_data.sh script.

Steps on How These Files were Generated:

1) Download and sort the data from NCBI
To download the data, visit <a href="https://www.ncbi.nlm.nih.gov/genomes/FLU/Database/nph-select.cgi?go=database/">NCBI's Influenza Virus Resource</a>. We obtained the data using the following criteria:

- Keyword = "H1N1",
- Sequence type = "Protein",
- Type = "A"
- Host = "human",
- Country/Region = "United States",
- Protein = "HA",
- Subtype = "any",
- Collection year = "1918-2012"
- Under additional filters, include sequences from "Pandemic (H1N1) viruses" and "Lineage defining strains".
Any other criteria selection on the website that are not listed above were left blank or as "any".

This will generate a list of sequences. At the top, click on "Customize FASTA defline" and customize it as ">{year}_{accession}". Then click, "Download". This will download the data as a FASTA file with defline, called "HA_protein_sequences-1918-2012.fa" in our data folder. 

Then, we sorted this data based on years using the code below. Make sure to change the path to your appropriate folder as needed. 

Note that this can take a while or run into issues with file size. To save time, you can skip this step and use the already sorted file "ordered_HA_protein_sequences.fa" in our data folder.

```
from Bio import SeqIO
 
# Path to our input and output files 
input_file = "../data/HA_protein_sequences-1918-2012.fa"
output_file = "../data/ordered_HA_protein_sequences.fa"
 
# Read through all the sequences
sequences = list(SeqIO.parse(input_file, "fasta"))
 
# Since the description line of the FASTA file is ">{year}_{accession}", we can sort the sequences by year using the number before the “_” in the header.

sequences.sort(key=lambda seq: int(seq.id.split('_')[0]))
 
# Save the sorted sequences to a new file, using the output_file path above
SeqIO.write(sequences, output_file, "fasta")
 
print(f"You have successfully reordered the sequences by year, from earliest to latest, and the output has been saved to {output_file}")

```
This code will give you the re-ordered data "ordered_HA_protein_sequences.fa", which can be found in our data folder.

2) Install MAFFT and use MAFFT to perform multiple sequence alignment

Install MAFFT and verify that it was successfully installed. For us, the version we got after running the below code is v.7.505. Press "y" after "sudo apt-get install mafft" to say yes to installation question.
```
sudo apt-get update
sudo apt-get install mafft
# Press y to say yes to installation question
# Verify that mafft was successfully installed
mafft --version
```

Run the multiple sequence alignment using MAFFT and the sequences from "ordered_HA_protein_sequences.fa".

```
# Navigate to the folder containing the ordered_HA_protein_sequences.fa file to be aligned:
# Run MAFFT using the following command: mafft -auto file_to_be_aligned > output_file_name

mafft --auto ordered_HA_protein_sequences.fa > aligned_HA_protein_sequences.fa

# Check that the aligned_HA_protein_sequences.fa was successfully generated by opening it up.
# Make sure the file show "-" in the sequences to indicate gaps.

nano aligned_HA_protein_sequences.fa
```
This file can now be viewed via MsaView using the instructions above.

3) Building the phylogenetic tree

To build a phylogenetic tree with an interactive surface, we'll use <a href="https://mafft.cbrc.jp/alignment/server/">this website</a>. This website also performs multiple sequence alignment but unlike what we did above, this website does not offer a nice visualization that allow user to analyze the alignment as well. 

Click on the link above and upload the "ordered_HA_protein_sequences.fa" file to where it says "Input: Paste protein or DNA sequences in fasta format or upload a plain text file:". Without changing anything else, click "Submit". 

After the page finishes loading. Click "Phylogenetic tree". Then choose the "Average linkage (UPGMA)" method. Select "Go". 
Now, you can either scroll down and download "Tree file" as a Newick folder under "Result (for external tree viewers)" or click "View tree on Phylo.io" to play around with the interactive tree. 
You can expand/collapse or rearrange the tree to explore the data you're interested in. 
Decrease the font size under Settings to see the text more clearly.

Below is the link to our tree, open it and choose "Collapsed tree" view. 

Note that the 2009 cluster is almost at the bottom right corner where there's a big triangle of collapsed branches. We have rearranged the nodes and settings to clearly show this here:
<a href="https://mafft.cbrc.jp/alignment/server/spool/_phyloio.241206193929469.html">https://mafft.cbrc.jp/alignment/server/spool/_phyloio.241206193929469.html</a>

This Newick tree file, which can also be found in our data folder, can be uploaded onto MsaView on JBrowse. 

### Working Example of the JBrowse Genome Browser:
If you would like to try out our genome browser before installing, you can do so at the following link: <a href="https://mluo123.github.io/bioe231-theclique/jbrowse2/">https://mluo123.github.io/bioe231-theclique/jbrowse2/</a>
