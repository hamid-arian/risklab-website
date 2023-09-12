# The Tone, the Signal and the Noise

Here's how the Marcenko-Pastur PDF is mathematically defined:

$$
f[\lambda]= \begin{cases}\frac{T}{N} \frac{\sqrt{\left(\lambda_{+}-\lambda\right)\left(\lambda-\lambda_{-}\right)}}{2 \pi \lambda \sigma^{2}} & \text{if } \lambda \in\left[\lambda_{-}, \lambda_{+}\right] \\ 0 & \text{if } \lambda \notin\left[\lambda_{-}, \lambda_{+}\right]\end{cases}
$$

You can fit this distribution to your eigenvalues to separate the signal from the noise. Once the noise has been identified, it is possible to denoise the covariance matrix, thereby improving the reliability of any subsequent analyses.

Below are code snippets for the discussed methodologies, available in both Python and Julia in the RiskLabAI library.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def marcenkoPasturPDF(var, q, pts):
  ```
  
  ```python
  def PCA(matrix):
  ```
  
  ```python
  def fitKDE(obs, bwidth, kernel, x):
  ```
</td><td style="border: 1px solid transparent">

  ```julia
  function pdfMarcenkoPastur(var, ratio, points)
  ```
  
  ```julia
  function PCA(matrix)
  ```
  
  ```julia
  function KDE(observations; bandWidth, kernel, valuesForEvaluating)
  ```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

We also discussed the limitations of commonly used methods like shrinkage for conditioning covariance matrices and presented an alternative approach for denoising.

<div style="display: flex; justify-content: center;"><figure style="width:40%; text-align: center"><img src="Figs\1.png" alt="Types of Financial Data"/><figcaption style="color:DimGray; font-weight:bold">Blank</figcaption></figure></div>

The Marcenko-Pastur PDF fits surprisingly well with actual eigenvalues of a matrix, allowing us to separate the eigenvalues associated with signal from those related to noise.

<div style="display: flex; justify-content: center;"><figure style="width:40%; text-align: center"><img src="Figs\?.png" alt="Types of Financial Data"/><figcaption style="color:DimGray; font-weight:bold">Blank</figcaption></figure></div>

The denoising methodology aims to preserve the signal while removing the noise. It first identifies the eigenvalues associated with noise and then adjusts them to enhance the signal-to-noise ratio.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def denoisedCorr(eval, evec, nfacts):
  ```
  
</td><td style="border: 1px solid transparent">

  ```julia
  function denoisedCorr(eigenValues, eigenVectors, numberFactors)
  ```
  
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

<div style="display: flex; justify-content: center;"><figure style="width:40%; text-align: center"><img src="Figs\3.png" alt="Types of Financial Data"/><figcaption style="color:DimGray; font-weight:bold">Blank</figcaption></figure></div>

## Detoning: Simplifying the Math

Detoning is a technique used to remove the market influence from a financial correlation matrix. This is particularly useful in clustering algorithms that aim to identify relationships between specific financial assets. Removing the market influence makes it easier for these algorithms to group assets based on their individual characteristics rather than the broader market trends. 

The detoned correlation matrix is given by:

$$
\widetilde{C}_{2} = C_{1} - W_{M} \Lambda_{M} W_{M}^\prime
$$

Here, we adjust the correlation matrix \(C_1\) by subtracting \(W_M \Lambda_{M} W_{M}^\prime\), where \(W_M\) and \(\Lambda_{M}\) are the eigenvectors and eigenvalues associated with the market.

For those interested in portfolio optimization, the optimal allocations in the original asset basis can be computed as:

$$
\omega^{*} = W_{+} f^{*}
$$

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def detoneCorrMatrix(C1: np.ndarray) -> np.ndarray:
  ```

</td><td style="border: 1px solid transparent">

  ```julia
  function detoneCorrMatrix(C1::Array{Float64})::Array{Float64}
  ```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Experimental Results: A Summary

### Minimizing Portfolio Variance

Experiments show that using denoised and detoned covariance matrices can help in constructing better portfolios. Specifically, these treated matrices offer benefits when we try to minimize the portfolio variance. 

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def minVariancePortfolio(cov: np.ndarray) -> np.ndarray:
  ```
  
</td><td style="border: 1px solid transparent">

  ```julia
  function minVariancePortfolio(cov::Array{Float64})::Array{Float64}
  ```
  
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

### Maximizing Sharpe Ratio

Similar experiments aimed at maximizing the Sharpe ratio of a portfolio also showed remarkable improvements when using denoised and detoned matrices. 

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def maxSharpeRatioPortfolio(cov: np.ndarray, mu: np.ndarray) -> np.ndarray:
  ```
  
</td><td style="border: 1px solid transparent">

  ```julia
  function maxSharpeRatioPortfolio(cov::Array{Float64}, mu::Array{Float64})::Array{Float64}
  ```
  
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.
