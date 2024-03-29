/**
 * 题目地址：https://leetcode.cn/problems/container-with-most-water/description/
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 公式：
 * 容器 = min(height[i], height[j]) * (j - i)
 * 相对最矮高度 * 相对宽度
 * 从两端开始并向中间移动的双指针法可以确保每次移动都是朝着可能增加容量的方向进行的，而不是盲目地检查所有可能的容器组合。这种方法比暴力解法（检查所有可能的线对组合）要高效得多，因为它避免了不必要的重复计算。同时，这种策略也保证了所有有潜力的容器都被考虑到，从而找到最大的容量。
 * **/

const height = [1,8,6,2,5,4,8,3,7]
const maxArea = (height) => {

}
