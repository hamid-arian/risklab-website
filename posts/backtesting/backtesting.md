# Financial Backtesting and the Curse of Overfitting

Even if you manage to avoid all the above pitfalls, your backtesting may still lead to false positives due to multiple testing, selection bias, or overfitting. Overfitting happens when a strategy is tailored too closely to historical data, making it unlikely to perform well on new, unseen data.

## A Technical Solution: Combinatorially Symmetric Cross-Validation (CSCV)

CSCV is a technique that uses combinations of submatrices created from the performance metrics of various trials. These submatrices are then used to train and test the model to evaluate the likelihood of backtesting overfitting.

<table style="width:80%">
<tr><th style="width:50%; text-align: center">Julia</th>
<th style="width:50%; text-align: center">Python</th></tr><tr>
<td style="border: 1px solid transparent">

```Julia
function probabilityOfBacktestOverfitting(
        matrixData::Matrix, 
        nPartions::Integer, 
        metric::Function;
        decisionBoundary= 0.5::Float64 ,
        riskFreeReturn  = 0 ::Float64
)::Tuple{Float64,Array}
```
</td><td style="border: 1px solid transparent">

```python
def probability_of_backtest_overfitting(
        matrix_data: np.ndarray, 
        n_partitions: int, 
        metric: Callable, 
        decision_boundary: float = 0.5, 
        risk_free_return: float = 0.0
) -> Tuple[float, List[float]]:
```
</td></tr><tr><td colspan="2" style="text-align: center">
        View More: <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Python</a>
</td></tr></table>


These functionalities are available in both Python and Julia in the RiskLabAI library.

### Mathematical Formula for CSCV

To calculate the total number of combinations, use:

$$
\binom{S}{\frac{S}{2}} = \prod_{i=0}^{\frac{S}{2}-1} \frac{S-i}{\frac{S}{2}-i}
$$

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.