## Cross-Validation in Finance: Challenges and Solutions

### The Shortcomings of Ordinary Cross-Validation in Finance

In traditional settings, cross-validation is an effective tool for evaluating a machine learning model's performance. However, the complexities of financial data pose unique challenges:

1. **Data Dependency**: Financial observations are often not independently and identically distributed (IID), contradicting a key assumption of cross-validation.
  
2. **Repeated Testing**: Using the test set multiple times during model development can lead to selection bias.

3. **Data Leakage**: This occurs when training and testing datasets share information, affecting the model's predictive accuracy.

### K-Fold Cross-Validation: A Closer Look

In k-fold cross-validation, the data is partitioned into $k$ subsets. One subset is used for validation, while the rest are used for training. This is repeated $k$ times, and the performance metrics are averaged.

<center>
<figure>
<img src="Figs\kFoldCV.png" width="40%" alt="k-fold cross validation"/>
<figcaption><span style="color:DimGray; font-weight:bold">A general view of a 7-fold Cross Validation operation</span></figcaption>
</figure>
</center>

### Overcoming Challenges: Purging and Embargo

#### Purging

To mitigate the issue of data leakage, one solution is "purging." Purging involves eliminating observations from the training set that have labels overlapping in time with those in the testing set.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def purged_train_times(
  data: pd.Series,
  test: pd.Series
) -> pd.Series:
```
</td><td style="border: 1px solid transparent">

```julia
function purgedTrainTimes(
  data::TimeArray,
  test::TimeArray
) ::TimeArray 
end
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

<center>
<figure>
<img src="Figs\Purging.png" width="40%" alt="purging"/>
<figcaption><span style="color:DimGray; font-weight:bold">Purging overlap between train and test set</span></figcaption>
</figure>
</center>

#### Embargo

An additional step, known as "embargo," can be implemented to further eliminate data leakage. This involves excluding observations from the training set that immediately follow an observation in the testing set.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def embargo_times(
  times: pd.Series,
  percent_embargo: float
) -> pd.Series:
```
</td><td style="border: 1px solid transparent">

```julia
function embargoTimes(
  times::Array,
  percentEmbargo::Float64
) ::TimeArray 
end
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

## Purged K-Fold Class in RiskLabAI

When building a machine learning model, it's essential to avoid data leakage between the training and test sets. The Purged K-Fold method in RiskLabAI is designed for this purpose. It takes into account parameters like the number of K-Fold splits, observation times, and the size of the embargo.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
class PurgedKFold(KFold):
    def __init__(self, 
                 n_splits: int,
                 times: pd.Series, 
                 percent_embargo: float
    ):
    def split(self, 
              data: pd.DataFrame, 
              labels: pd.Series=None, 
              groups=None
    ):
```

</td><td style="border: 1px solid transparent">

```julia
mutable struct PurgedKFold
    nSplits::Int64
    times::TimeArray
    percentEmbargo::Float64
end
function purgedKFoldSplit(self::PurgedKFold,
                          data::TimeArray
)::Tuple
end
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

These functionalities are available in both Python and Julia in the RiskLabAI library.

<div style="display: flex; justify-content: center;"><table style="width:80%"><tr><th style="width:50%; text-align: center">Python</th><th style="width:50%; text-align: center">Julia</th></tr><tr><td style="border: 1px solid transparent">

```python
def cross_validation_score(classifier: ClassifierMixin, 
                           data: pd.DataFrame, 
                           labels: pd.Series=None,
                           sample_weight: np.ndarray=None, 
                           scoring='neg_log_loss', 
                           times: pd.Series=None, 
                           n_splits: int=None, 
                           cross_validation_generator: BaseCrossValidator=None,
                           percent_embargo: float=0.0
) -> np.array:
```

</td><td style="border: 1px solid transparent">

```julia
function crossValidationScore(classifier,  
                              data::TimeArray, 
                              labels::TimeArray,
                              sampleWeights::Array, 
                              scoring::String,
                              times::TimeArray, 
                              crossValidationGenerator::PurgedKFold, 
                              nSplits::Int, 
                              percentEmbargo::Float64
)::Array 
```
</td></tr><tr><td colspan="2" style="text-align: center">View More: <a href="https://www.github.com/risklabai/RiskLabAI.py">Python</a> | <a href="https://www.github.com/risklabai/RiskLabAI.jl">Julia</a></td></tr></table></div>

These functionalities are available in both Python and Julia in the RiskLabAI library.

### References

1. De Prado, M. L. (2018). Advances in financial machine learning. John Wiley & Sons.
2. de Prado, M. M. L. (2020). Machine learning for asset managers. Cambridge University Press.