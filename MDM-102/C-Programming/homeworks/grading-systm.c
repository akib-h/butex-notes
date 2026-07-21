#include <stdio.h>

int main()
{
    int mark;

    printf("Enter marks: ");
    scanf("%d", &mark);

    if (mark < 0 || mark > 100)
    {
        printf("Invalid marks!");
    }
    else if (mark >= 80)
    {
        printf("Grade: A+\nGPA: 5.00");
    }
    else if (mark >= 70)
    {
        printf("Grade: A\nGPA: 4.00");
    }
    else if (mark >= 60)
    {
        printf("Grade: A-\nGPA: 3.50");
    }
    else if (mark >= 50)
    {
        printf("Grade: B\nGPA: 3.00");
    }
    else if (mark >= 40)
    {
        printf("Grade: C\nGPA: 2.00");
    }
    else if (mark >= 33)
    {
        printf("Grade: D\nGPA: 1.00");
    }
    else
    {
        printf("Grade: F\nGPA: 0.00");
    }

    return 0;
}
