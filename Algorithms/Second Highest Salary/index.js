# Write your MySQL query statement below
select max(Salary) as SecondHighestSalary from Employee
where Salary NOT IN (
      Select max(Salary) from Employee
      )

