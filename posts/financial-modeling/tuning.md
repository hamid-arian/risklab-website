# Hyper-Parameter Tuning with Cross-Validation

## Importance of Hyper-Parameter Tuning
Hyper-parameter tuning is crucial for optimizing machine learning (ML) algorithms. Effective tuning results in improved real-world performance. Cross-validation (CV) plays a vital role in this, especially in the finance sector, where conventional approaches often fall short. This blog focuses on utilizing the Purged k-fold CV method for hyper-parameter optimization.

## Purged-Kfold Integration into MLJBase
For hyper-parameter tuning, grid search is often an initial step to understand the data's underlying structure. In MLJBase, `GridSearchcV` uses a CV generator, and to avoid overfitting, our PurgedKFold class can be passed as an argument.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
# Python code for Purged-Kfold will be provided here
# This is not available at the time or writing this article
```
</td><td style="border: 1px solid transparent">

```julia
function MLJBase.train_test_pairs(
    purgedkfold::PurgedKFold,
    rows ::TimeArray
)
function MLJBase.train_test_pairs(
    purgedkfold::PurgedKFold,
    rows::UnitRange
)
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Non-Negative Parameters
Non-negative hyperparameters are common in some ML algorithms, such as the SVC classifier and RBF kernel. Rather than using a uniform distribution for sampling, using a log-uniform distribution is often more effective for such parameters.

For a variable $x$ to have a log-uniform distribution between $a>0$ and $b>a$, its CDF and PDF can be defined as:

$$
F[x]=\left\{\begin{array}{cl}
\frac{\log[x]-\log[a]}{\log[b]-\log[a]} & \text{for } a \leq x \leq b \\
0 & \text{for } x<a \\
1 & \text{for } x>b
\end{array}\right.
$$

$$
f[x]=\left\{\begin{array}{cl}
\frac{1}{x \log[b / a]} & \text{for } a \leq x \leq b \\
0 & \text{for } x<a \\
0 & \text{for } x>b
\end{array}\right.
$$

<figure style="display: flex; justify-content: center;">
<img src="Figs\loguniform.png" style="width: 40%;" alt="Log-uniform distribution"/>
<figcaption>Log-uniform distribution</figcaption>
</figure>

## Limitations of Accuracy as a Measure
Accuracy alone doesn't provide a meaningful evaluation in finance-related ML, particularly in investment strategies. It fails to account for the probabilities associated with predictions. Cross-entropy loss, or $log loss$, is a better performance metric as it incorporates prediction probabilities.

The formula for log loss is:

$$
L[Y, P]=-\log[\text{Prob}[Y \mid P]]=-N^{-1} \sum_{n=0}^{N-1} \sum_{k=0}^{K-1} y_{n, k} \log[p_{n, k}]
$$

Accuracy doesn't suffice for hyper-parameter tuning in financial applications. It should ideally be supplemented or replaced with metrics that better capture the complexities of financial decision-making.
  
Note: All these functionalities are available in both Python and Julia in the RiskLabAI library. You can view more [here for Python](https://www.github.com/risklabai/RiskLabAI.py) and [here for Julia](https://www.github.com/risklabai/RiskLabAI.jl).

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.