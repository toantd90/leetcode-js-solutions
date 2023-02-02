<h2><a href="https://leetcode.com/problems/sentence-similarity/">734. Sentence Similarity</a></h2><h3>Easy</h3><hr><div><p>We can represent a sentence as an array of words, for example, the sentence <code>"I am happy with leetcode"</code> can be represented as <code>arr = ["I","am",happy","with","leetcode"]</code>.</p>

<p>Given two sentences <code>sentence1</code> and <code>sentence2</code> each represented as a string array and given an array of string pairs <code>similarPairs</code> where <code>similarPairs[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> indicates that the two words <code>x<sub>i</sub></code> and <code>y<sub>i</sub></code> are similar.</p>

<p>Return <em><code>true</code> if <code>sentence1</code> and <code>sentence2</code> are similar, or <code>false</code> if they are not similar</em>.</p>

<p>Two sentences are similar if:</p>

<ul>
	<li>They have <strong>the same length</strong> (i.e., the same number of words)</li>
	<li><code>sentence1[i]</code> and <code>sentence2[i]</code> are similar.</li>
</ul>

<p>Notice that a word is always similar to itself, also notice that the similarity relation is not transitive. For example, if the words <code>a</code> and <code>b</code> are similar, and the words <code>b</code> and <code>c</code> are similar, <code>a</code> and <code>c</code> are <strong>not necessarily similar</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]
<strong>Output:</strong> true
<strong>Explanation:</strong> The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> sentence1 = ["great"], sentence2 = ["great"], similarPairs = []
<strong>Output:</strong> true
<strong>Explanation:</strong> A word is similar to itself.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> sentence1 = ["great"], sentence2 = ["doubleplus","good"], similarPairs = [["great","doubleplus"]]
<strong>Output:</strong> false
<strong>Explanation:</strong> As they don't have the same length, we return false.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= sentence1.length, sentence2.length &lt;= 1000</code></li>
	<li><code>1 &lt;= sentence1[i].length, sentence2[i].length &lt;= 20</code></li>
	<li><code>sentence1[i]</code> and <code>sentence2[i]</code> consist of English letters.</li>
	<li><code>0 &lt;= similarPairs.length &lt;= 1000</code></li>
	<li><code>similarPairs[i].length == 2</code></li>
	<li><code>1 &lt;= x<sub>i</sub>.length, y<sub>i</sub>.length &lt;= 20</code></li>
	<li><code>x<sub>i</sub></code> and <code>y<sub>i</sub></code> consist of lower-case and upper-case English letters.</li>
	<li>All the pairs <code>(x<sub>i</sub>,<sub> </sub>y<sub>i</sub>)</code> are <strong>distinct</strong>.</li>
</ul>
</div>