### Fractional Differentiation and Memory

Traditionally, differentiation to an integer degree is used to make a series stationary. However, fractional differentiation allows the exponent to be a real number. This helps to preserve memory.

The fractional model is mathematically expressed using the backshift operator $B$, and a real number exponent $d$ as:

$$
(1-B)^{d} = \sum_{k=0}^{\infty}(-B)^{k} \prod_{i=0}^{k-1} \frac{d-i}{k!}
$$

The series is then a dot product:

$$
\tilde{X}_{t} = \sum_{k=0}^{\infty} \omega_{k} X_{t-k}
$$

Here, $\omega$ consists of weights calculated based on the degree $d$. The weights alternate in sign and converge to zero as $k$ increases, providing an optimal balance between stationarity and memory.

<figure style="display: block; margin: auto; width: 40%;">
<img src="Figs\Fig1.png" alt="Types of Financial Data"/><figcaption style="text-align: center;"><span style="color:DimGray; font-weight:bold">FIGURE 1 - The impact of varying $d$ on weights $\omega$</span></figcaption></figure>

### Weight Sequence and Code Snippets

The sequence of weights can be generated iteratively as:

$$
\omega_{k} = -\omega_{k-1} \frac{d-k+1}{k}
$$

<figure style="display: block; margin: auto; width: 40%;">
<img src="Figs\Fig2.png" alt="Types of Financial Data"/><figcaption style="text-align: center;"><span style="color:DimGray; font-weight:bold">FIGURE 2 - Weights for $d$ in range $[1,2]$</span></figcaption></figure>

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def weighting(
    degree: float,
    size: int
) -> list:
    pass

def plotWeights(
    degreeRange: tuple,
    numberDegrees: int,
    size: int
) -> None:
    pass
```

</td><td style="border: 1px solid transparent">

```julia
function weighting(
    degree::Float64,
    size::Int
) -> Vector{Float64}
    # ...
end

function plotWeights(
    degreeRange::Tuple{Float64, Float64},
    numberDegrees::Int,
    size::Int
) -> Nothing
    # ...
end
```

</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

These functionalities are available in both Python and Julia in the RiskLabAI library.

### Convergence of Weights

The weights, $\omega$, tend to zero as $k$ increases. Also, the sign of $\omega$ alternates depending on whether $d$ is an integer, even or odd. This property is vital for balancing stationarity and memory in the series.

In summary, fractional differentiation offers a powerful method for transforming non-stationary financial time series into stationary ones while preserving as much memory as possible. This is essential for both inferential statistics and machine learning models in finance.


# Fractional Differentiation Methods for Time Series Analysis

In this blog, we'll focus on two techniques for fractional differentiation of a finite time series: the "expanding window" method and the "fixed-width window fracdiff" (FFD) method. These techniques are essential for handling non-stationary time series data in financial analytics.

## Expanding Window Method

Given a time series \( \{ X_t \}, t=1, \ldots, T \), this approach involves using varying weights \( \omega_k \) to calculate the fractionally differentiated value \( \tilde{X}_{T} \). The weights depend on the degree of differentiation \( d \) and a tolerance level \( \tau \), which limits the acceptable weight loss for the initial points.

$$
\lambda_l = \frac{\sum_{j=T-l}^{T}|\omega_{j}|}{\sum_{i=0}^{T-1}|\omega_{i}|}
$$

You select a \( l^* \) such that \( \lambda_{l^*} \leq \tau \) and \( \lambda_{l^*+1} > \tau \). This is to ensure that the weight loss doesn't go beyond a certain threshold.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def fracDiff(series: DataFrame, 
             degree: float, 
             threshold: float = 0.01) -> DataFrame:
```
</td><td style="border: 1px solid transparent">

```julia
function fracDiff(series::DataFrame, 
                  degree::Float64, 
                  threshold::Float64 = 0.01) -> DataFrame
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

The Fixed-width Window Fracdiff (FFD) method maintains a constant vector of weights \( \tilde{\omega}_{k} \) that do not fall below a given threshold \( \tau \).

$$
\tilde{\omega}_{k} = 
\begin{cases}
\omega_{k} & \text{if } k \leq l^* \\
0 & \text{if } k > l^*
\end{cases}
$$

Thus, the differentiated series \( \tilde{X}_t \) is computed as follows:

$$
\tilde{X}_{t}=\sum_{k=0}^{l^*} \tilde{\omega}_{k} X_{t-k}
$$

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def fracDiffFixed(series: DataFrame, 
                  degree: float, 
                  threshold: float = 1e-5) -> DataFrame:
```
</td><td style="border: 1px solid transparent">

```julia
function fracDiffFixed(series::DataFrame, 
                       degree::Float64, 
                       threshold::Float64 = 1e-5) -> DataFrame
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Achieving Stationarity

Both methods allow for the quantification of how much memory (or autocorrelation) needs to be removed to achieve a stationary series through the coefficient \( d^* \). Many finance studies have traditionally used integer differentiation, often removing more memory than necessary and potentially losing predictive power.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def minFFD(input: DataFrame) -> float:
```
</td><td style="border: 1px solid transparent">

```julia
function minFFD(input::DataFrame) -> Float64
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

<center>
<figure>
<img src="Figs\Fig5.png" width="40%" alt="Types of Financial Data">
</figure>
</center>

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.
