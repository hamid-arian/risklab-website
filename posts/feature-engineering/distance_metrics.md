# Distance Metrics in Machine Learning

Correlation measures only linear codependence, which can be misleading. Also, it does not satisfy properties of a metric, like nonnegativity and triangle inequality. A metric $d_{\rho}[X, Y]=\sqrt{1 / 2(1-\rho[X, Y])}$ can be formed using correlation. This metric essentially inherits properties from Euclidean distance after z-standardization, making it a 'true metric'.

Another normalized correlation-based distance metric, $d_{|\rho|}[X, Y]=\sqrt{1-|\rho[X, Y]|}$, can also be defined. This metric is especially useful when you need to consider negative correlations as similar for particular applications.

\[
d_{\rho}[X, Y] = \sqrt{2 T(1-\rho[X, Y])}
\]

\[
d_{|\rho|}[X, Y] = \sqrt{2 T(1-|\rho[X, Y]|)}
\]

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def calc_rho_metric(
    X: np.ndarray,
    Y: np.ndarray
) -> float:
```
</td><td style="border: 1px solid transparent">

```julia
function calc_rho_metric(
    X::Array{Float64,1},
    Y::Array{Float64,1}
) -> Float64
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Information Theory: Marginal and Joint Entropy

Correlation has limitations: it neglects nonlinear relationships, is sensitive to outliers, and is mostly meaningful for normally-distributed variables. To address this, we can use Shannon's entropy, defined for a discrete random variable \( X \):

\[
H[X] = -\sum_{x \in S_{X}} p[x] \log [p[x]]
\]

This entropy \( H[X] \) measures the amount of uncertainty or 'surprise' associated with \( X \).

For two discrete random variables \( X, Y \), the joint entropy is:

\[
H[X, Y] = -\sum_{x, y \in S_{X} \times S_{Y}} p[x, y] \log [p[x, y]]
\]

## Conditional Entropy

Conditional entropy \( H[X|Y] \) measures the remaining uncertainty in \( X \) when \( Y \) is known:

\[
H[X \mid Y] = H[X, Y] - H[Y]
\]

## Divergence Measures: Kullback-Leibler and Cross-Entropy

Kullback-Leibler (KL) divergence quantifies how one probability distribution \( p \) diverges from another \( q \):

\[
D_{K L}[p \| q] = \sum_{x \in S_{X}} p[x] \log \left[\frac{p[x]}{q[x]}\right]
\]

Cross-entropy \( H_C[p \| q] \) measures the information content using a wrong distribution \( q \) rather than the true distribution \( p \):

\[
H_{C}[p \| q] = H[X] + D_{K L}[p \| q]
\]

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def calc_kl_divergence(
    p: np.ndarray,
    q: np.ndarray
) -> float:
```
</td><td style="border: 1px solid transparent">

```julia
function calc_kl_divergence(
    p::Array{Float64,1},
    q::Array{Float64,1}
) -> Float64
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI

.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Mutual Information

The mutual information \( I[X;Y] \) measures the amount of information \( X \) and \( Y \) share:

\[
I[X; Y] = H[X] + H[Y] - H[X, Y]
\]

It can be further generalized to a metric form using normalized mutual information \( NMI \) to fulfill metric properties.

\[
NMI(X,Y) = \frac{I(X;Y)}{\sqrt{H(X)H(Y)}}
\]

### Conclusion

Both correlation and entropy-based measures have their places in modern applications. Correlation-based measures are computationally less demanding and have a long history in statistics. In contrast, entropy-based measures provide a comprehensive understanding of relationships between variables. Implementing these concepts can enhance your analytics and decision-making processes.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def calc_mutual_info(
    X: np.ndarray,
    Y: np.ndarray
) -> float:
```
</td><td style="border: 1px solid transparent">

```julia
function calc_mutual_info(
    X::Array{Float64,1},
    Y::Array{Float64,1}
) -> Float64
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>


# Variation of Information: A Simplified Guide

## Understanding Variation of Information
Variation of Information (VI) measures how much one variable tells us about another. It has two terms:

- Uncertainty in $X$ given $Y$: $H[X|Y]$
- Uncertainty in $Y$ given $X$: $H[Y|X]$

So, the formula becomes:

$$
VI[X, Y] = H[X|Y] + H[Y|X]
$$

We can also express it using other measures like Mutual Information ($I$) and joint entropy ($H[X, Y]$):

$$
VI[X, Y] = 2 H[X, Y] - H[X] - H[Y]
$$

or

$$
VI[X, Y] = H[X, Y] - I[X, Y]
$$

### Normalized VI
To compare VI across varying population sizes, we can normalize it:

$$
\widetilde{VI}[X, Y] = \frac{VI[X, Y]}{H[X, Y]}
$$

An alternative normalized metric is:

$$
\tilde{\tilde{VI}}[X, Y] = 1-\frac{I[X, Y]}{\max\{H[X], H[Y]\}}
$$

### Calculating Basic Measures: Entropy and Mutual Information

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def basic_measures(
    x: np.ndarray,
    y: np.ndarray,
    bins: int
) -> float
```

</td><td style="border: 1px solid transparent">

```julia
function basic_measures(
    x::Array{Float64,1},
    y::Array{Float64,1},
    bins::Int
) -> Float64
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

These functionalities are available in both Python and Julia in the RiskLabAI library.

## Continuous Variables and Discretization
For continuous variables, the entropy is calculated using integration. But in practice, we discretize the continuous data into bins to approximate entropy. For a Gaussian variable:

$$
H[X] = \frac{1}{2} \log \left[2 \pi e \sigma^{2}\right]
$$

The entropy can be estimated as:

$$
\hat{H}[X]=-\sum_{i=1}^{B_{X}} \frac{N_{i}}{N} \log \left[\frac{N_{i}}{N}\right]+\log \left[\Delta_{X}\right]
$$

For optimal binning, we can use formulas derived by Hacine-Gharbi and others. These vary depending on whether you are looking at the marginal entropy or the joint entropy.

### Calculating Variation of Information with Optimal Binning

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def variationsInformation(
    x: np.ndarray,
    y: np.ndarray,
    bins: int,
    norm: bool = False
    ) -> float:
```
</td><td style="border: 1px solid transparent">

```julia
function variationsInformation(
    x::Array{Float64,1},
    y::Array{Float64,1},
    numberOfBins::Int;
    norm::Bool = false
    ) -> Float64
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

The code above shows how to calculate the Variation of Information with optimal binning in both Python and Julia. If you set `norm=True`, you'll get the normalized value.

## Understanding Partitions in Data Sets

A partition, denoted as $P$, is a way to divide a dataset, $D$, into non-overlapping subsets. Mathematically, these subsets $D_k$ follow three main properties:

- Every subset contains at least one element, i.e., $\|D_k\| > 0$.
- Subsets do not overlap, i.e., $D_k \cap D_l = \varnothing$, for $k \neq l$.
- Together, the subsets cover the entire dataset, i.e., $\bigcup_{k=1}^{K} D_k = D$.

## Metrics for Comparing Partitions

We define the uncertainty or randomness associated with a partition $P$ in terms of entropy, given by:

$$
H[P] = -\sum_{k=1}^{K} p[k] \log [p[k]]
$$

Here, $p[k]$ is the probability of a randomly chosen element from $D$ belonging to the subset $D_k$.

If we have another partition $P'$, we can define several metrics like joint entropy, conditional entropy, mutual information, and variation of information to compare the two partitions. These metrics provide a way to measure the similarity or dissimilarity between two different divisions of the same dataset.

## Applications in Machine Learning

Variation of information is particularly useful in unsupervised learning to compare the output from clustering algorithms. It offers a normalized way to compare partitioning methods across various datasets.

## Experimental Results Summarized

- **No Relationship**: When there's no relation between two variables, both correlation and normalized mutual information are close to zero.
- **Linear Relationship**: For a strong linear relationship, both metrics are high but the mutual information is slightly less than 1 due to some uncertainty.
- **Nonlinear Relationship**: In this case, correlation fails to capture the relationship, but normalized mutual information reveals a substantial amount of shared information between the variables.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def numberBins(
  numberObservations: int,
  correlation = None
):
```

```python
def variationsInformationExtended(
  x: list,
  y: list,
  norm: bool = False
):
```

```python
def mutualInformation(
  x: list,
  y: list,
  norm: bool = False
):
```
</td><td style="border: 1px solid transparent">

```julia
function numberBins(
  numberObservations::Int,
  correlation = nothing
)
```

```julia
function variationsInformationExtended(
  x::Array,
  y::Array;
  norm::Bool = false
)
```

```julia
function mutualInformation(
  x::Array,
  y::Array;
  norm::Bool = false
)
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

**Figures:**

<div align="center">
<figure>
<img src="Figs\2.png" width="40%" alt="Scatterplot of two independent Gaussian random variables"/>
<figcaption><span style="color:DimGray; font-weight:bold">Figure 2: Independent Gaussian Variables</span></figcaption>
</figure>

<figure>
<img src="Figs\3.png" width="40%" alt="Scatterplot of two Gaussian random variables with a linear relationship"/>
<figcaption><span style="color:DimGray; font-weight:bold">Figure 3: Linear Relationship</span></figcaption>
</figure>

<figure>
<img src="Figs\4.png" width="40%" alt="Scatterplot of two Gaussian random variables with a nonlinear relationship"/>
<figcaption><span style="color:DimGray; font-weight:bold">Figure 4: Nonlinear Relationship</span></figcaption>
</figure>
</div>

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.
