# Hierarchical Risk Parity: A Modern Portfolio Construction Method 

We present a cutting-edge method for constructing financial portfolios, called Hierarchical Risk Parity (HRP). This method overcomes challenges posed by traditional techniques, by using modern mathematics and machine learning. HRP works in three steps: Tree Clustering, Quasi-Diagonalization, and Recursive Bisection. The approach is based on the information in the covariance matrix without requiring its inversion, and it works even with singular matrices.

## Tree Clustering

Given a matrix of observations $X$, we first generate a correlation matrix. A distance measure is defined, and an $N \times N$ distance matrix $D$ is created.

We use tree structures to hierarchically cluster financial assets. The goal is to group together the closest financial assets in terms of their distance measure, providing a hierarchical structure that represents the similarities between the assets.

In mathematical terms:

$$
d_{i, j} = \sqrt{\frac{1}{2}(1 - \rho_{i, j})}
$$

The algorithm performs clustering based on a new distance measure $\tilde{d}$, which computes the distance between column vectors of $D$. Eventually, we create clusters by minimizing $\tilde{d}_{i, j}$.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def tree_clustering(
    correlation: np.ndarray
) -> np.ndarray:
```
</td><td style="border: 1px solid transparent">

```julia
function tree_clustering(
    correlation::Array{Float64,2}
)::Array{Float64,2}
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Quasi-Diagonalization

The next stage rearranges the covariance matrix to group similar investments together along the diagonal. The result is a quasi-diagonal matrix that simplifies the allocation of investments.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def quasiDiagonal(
    link: np.ndarray
) -> np.ndarray:
```
</td><td style="border: 1px solid transparent">

```julia
function quasiDiagonal(
    link::Array{Float64,2}
)::Array{Float64,2}
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Recursive Bisection

The last stage is the allocation of assets, leveraging the quasi-diagonal matrix. The algorithm recursively bisects the sorted list of original items into subsets and allocates investments in inverse proportion to their aggregated variances.

The algorithm follows:

1. Initialize list of items $L$ and assign a unit weight to all items $w_n=1, \forall n$.
2. For each subset $L_i$ with more than one item:
    - Bisect $L_i$ into two subsets $L_i^{(1)}$ and $L_i^{(2)}$.
    - Define the variance of each subset $\tilde{V}_{i}^{(j)}$ based on the covariance matrix of its constituents.

And so, the portfolio is constructed.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def recursive_bisection(
    sorted_list: List[int],
    covariance_matrix: np.ndarray
) -> np.ndarray:
```
</td><td style="border: 1px solid transparent">

```julia
function recursive_bisection(
    sorted_list::Array{Int,1},
    covariance_matrix::Array{Float64,2}
)::Array{Float64,1}
```
</td></tr><tr><td colspan

="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

### Comparing Portfolio Risk Strategies: HRP vs. CLA vs. IVP

This blog presents a Monte Carlo simulation study comparing three portfolio allocation strategies: Hierarchical Risk Parity (HRP), Critical Line Algorithm (CLA), and Inverse Variance Portfolio (IVP). We find that while CLA aims for the lowest in-sample risk, it performs the worst in out-of-sample tests. Specifically, HRP yields the lowest out-of-sample variance, making it preferable for risk parity investors who often employ leverage.

**Key Findings**:
- HRP portfolios have 72.47% lower variance than CLA portfolios and 38.24% lower variance than IVP portfolios.
- HRP improves the out-of-sample Sharpe ratio of a CLA strategy by about 31.3%.

### Methodology

Three key steps are followed:
1. Generate 10 series of random Gaussian returns for 520 observations (equivalent to 2 years of daily history), with random shocks and correlation structure.
2. Compute HRP, CLA, and IVP portfolios looking back at 260 observations (a year of daily history).
3. Rebalance portfolios every 22 observations (equivalent to a monthly frequency).

This procedure is repeated 10,000 times.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def monteCarloSimulation(
  num_simulations: int,
  num_observations: int
) -> float:
  ...
```
</td><td style="border: 1px solid transparent">

```julia
function monteCarloSimulation(
  num_simulations::Int,
  num_observations::Int
)::Float64
  ...
end
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

### Insights and Interpretations

1. CLA's optimization program aims for the lowest variance but ends up with the highest out-of-sample variance.
2. IVP disregards the correlation structure, which affects its performance.
3. HRP combines diversification across all investments and clusters of investments, making it more robust to both common and idiosyncratic shocks.

### Flexibility and Scalability

The HRP method is flexible and allows for variations. It can incorporate forecasted returns and other econometric methods.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def flexibleHRP(
  forecast_returns: list,
  econometric_method: str
) -> float:
  ...
```
</td><td style="border: 1px solid transparent">

```julia
function flexibleHRP(
  forecast_returns::Array{Float64,1},
  econometric_method::String
)::Float64
  ...
end
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

### Mathematical Insight

In simpler terms, let's consider two vectors $ X $ and $ Y $. The correlation variable $ \rho[x, y] $ is used to derive a distance measure $ d[x, y] $ defined as:

$$
d[x, y] = \sqrt{\frac{1}{2}(1 - \rho[x, y])}
$$

This distance measure is proven to be a true metric, providing a robust way to measure how similar or different two portfolios are.

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.
