# ARTERY Topic Notes

This topic demonstrates a reproduced ARTERY-style low-latency quantum feedback flow.

The tutorial material is organized as:

```text
hw/fpga/     FPGA project and ARTERY feedback RTL integration
software/    Python-side S21 analysis, IQ demodulation, clustering, and prediction
tools/       UDP board tests and GUI demo
tutorial/    Notebook entry for software-side analysis
```

Recommended presentation flow:

1. Run the Python analysis to validate S21 readout processing.
2. Build the Vivado hardware project.
3. Program the FPGA.
4. Send S21/IQ data through UDP.
5. Display the returned branch decision, latency, and feedback waveform.
