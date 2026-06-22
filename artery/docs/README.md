# ARTERY Topic Notes

This topic demonstrates a reproduced ARTERY-style low-latency quantum feedback flow.

The tutorial material is organized as:

```text
hw/interface/ Hardware interface contract and packet/datapath notes
software/    Python-side S21 analysis, IQ demodulation, clustering, and prediction
tools/       UDP board tests and GUI demo
demo/        Numbered tutorial notebooks and result figures
```

Recommended presentation flow:

1. Run the Python analysis to validate S21 readout processing.
2. Review the hardware interface contract.
3. Send S21/IQ data through UDP in the board demo.
4. Display the returned branch decision, latency, and feedback waveform.
