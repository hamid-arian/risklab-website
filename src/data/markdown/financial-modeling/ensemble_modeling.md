# Ensemble Techniques in Finance

When dealing with a set of training observations and outcomes $\{(x_i, y_i)\}$, you would want to estimate a function $\hat{f}[x]$ that closely matches the true function $f(x)$.

The function is generally modeled as:
$$
y = f(x) + \varepsilon
$$
where $\varepsilon$ is white noise.

The aim is to minimize the mean squared error given by:
$$
\mathbb{E}[(y_i - \hat{f}[x_i])^2]
$$

This can be further decomposed into three terms: Bias squared, Variance, and the noise term $\sigma_{\varepsilon}^2$.

## The Power of Ensemble Methods

Ensemble techniques, like bagging (Bootstrap Aggregation), aim to build a robust model by averaging the predictions of multiple base models. Bagging is particularly effective in reducing the variance of the prediction, hence addressing overfitting.

The variance of a bagged prediction depends on the number of base models $(N)$, their average variance $(\bar{\sigma})$, and the average correlation between their predictions $(\bar{\rho})$.

The benefit of bagging is quantifiable. It's effective as long as:
$$
\bar{\rho} < 1
$$

<center><figure style="width: 40%; text-align: center;">
  <img src="Figs/Standard Deviation of the bagged prediction.png" alt="Standard Deviation of the bagged prediction">
  <figcaption>Standard Deviation of the Bagging Prediction</figcaption>
</figure></center>

## Accuracy Considerations in Bagging Classifiers

For a bagging classifier predicting $k$ classes, the accuracy depends on the number of base classifiers $N$ and their individual accuracy $p$. Under certain conditions, bagging classifiers can outperform individual classifiers.

The mathematical equation that demonstrates this is:
$$
p > \frac{1}{k} \Rightarrow \mathbb{P}\left[X > \frac{N}{k}\right] > p
$$

<center><figure style="width: 40%; text-align: center;">
  <img src="Figs/Bagging Classifier Accuracy (function of p and N).png" alt="Accuracy of Bagged Classifiers">
  <figcaption>Accuracy of Bagged Classifiers</figcaption>
</figure></center>

Both Python and Julia functionalities for bagging classifier accuracy are available in the RiskLabAI library.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def bagging_classifier_accuracy(
    N: int,
    p: float,
    k: int = 2
) -> float:
```
</td><td style="border: 1px solid transparent">

```julia
function baggingClassifierAccuracy(
    N::Int, 
    p::Float64, 
    k::Int
)::Float64
```

</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>


## Handling Dependency in Observations: A Challenge to Bagging

Financial observations often exhibit dependency, challenging the assumption that data points are independent and identically distributed (IIDs). This dependency affects bagging in two ways:

1. The samples in replacement sets are similar, reducing the efficiency of bagging in lowering prediction variance.
2. The 'out-of-bag' accuracy becomes inflated, meaning the model may seem more accurate than it actually is.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def calculate_bagging_variance(
      observations: List[float],
      num_samples: int
  ) -> float:
  ```
</td><td style="border: 1px solid transparent">

  ```julia
  function calculate_bagging_variance(
      observations::Vector{Float64},
      num_samples::Int
  )::Float64
  ```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Advantages of Using Random Forests

Random Forests (RF) are an extension of bagging that introduce another layer of randomness to combat overfitting and dependency in observations. RF offers the following advantages:

1. Reduced prediction variance
2. Feature significance analysis
3. Reliable out-of-the-bag accuracy estimates

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def train_random_forest(
      dataset: DataFrame,
      num_trees: int
  ) -> RandomForestClassifier:
  ```
</td><td style="border: 1px solid transparent">

  ```julia
  function train_random_forest(
      dataset::DataFrame,
      num_trees::Int
  )::RandomForestClassifier
  ```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Boosting Poor Estimators for Accuracy

Boosting is an iterative method of improving model accuracy by combining poor estimators. It involves adjusting sample weights based on their classification results and produces a weighted average of individual forecasts.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def train_boosting(
      dataset: DataFrame,
      num_estimators: int,
      threshold: float
  ) -> BoostingClassifier:
  ```
</td><td style="border: 1px solid transparent">

  ```julia
  function train_boosting(
      dataset::DataFrame,
      num_estimators::Int,
      threshold::Float64
  )::BoostingClassifier
  ```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Bagging vs. Boosting in Finance

While boosting minimizes both prediction variance and bias, it is more prone to overfitting—especially in financial applications where data is noisy. In contrast, bagging is less prone to overfitting and can be parallelized, making it generally more effective for financial data.

## Leveraging Parallelism for Scalability

For algorithms that don't scale well, like Support Vector Machines (SVMs), bagging can be parallelized to enhance efficiency. This allows you to run multiple weaker models concurrently, making bagging a scalable option for large datasets.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

  ```python
  def train_bagging_svm(
      dataset: DataFrame,
      num_estimators: int,
      max_iter: int,
      tol: float
  ) -> BaggingClassifier:
  ```
</td><td style="border: 1px solid transparent">

  ```julia
  function train_bagging_svm(
      dataset::DataFrame,
      num_estimators::Int,
      max_iter::Int,
      tol::Float64
  )::BaggingClassifier
  ```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.