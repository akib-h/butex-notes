void print_grade(int mark)
{
    if (mark < 0 || mark > 100)      { printf("Invalid marks!"); return; }
    if (mark >= 80)                  { printf("Grade: A+\nGPA: 5.00"); return; }
    if (mark >= 70)                  { printf("Grade: A\nGPA: 4.00"); return; }
    if (mark >= 60)                  { printf("Grade: A-\nGPA: 3.50"); return; }
    if (mark >= 50)                  { printf("Grade: B\nGPA: 3.00"); return; }
    if (mark >= 40)                  { printf("Grade: C\nGPA: 2.00"); return; }
    if (mark >= 33)                  { printf("Grade: D\nGPA: 1.00"); return; }
    printf("Grade: F\nGPA: 0.00");
}

int main()
{
    int mark;
    printf("Enter marks: ");
    scanf("%d", &mark);
    print_grade(mark);
    return 0;
}
