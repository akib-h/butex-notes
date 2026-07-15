#include <stdio.h>

int main() {
    float marks;

    printf("Enter your marks (0-100): ");
    scanf("%f", &marks);

    if (marks < 0 || marks > 100) {
        printf("Invalid marks!\n");
    }
    else if (marks >= 80) {
        printf("Grade: A+\n");
        printf("GPA: 4.00\n");
    }
    else if (marks >= 75) {
        printf("Grade: A\n");
        printf("GPA: 3.75\n");
    }
    else if (marks >= 70) {
        printf("Grade: A-\n");
        printf("GPA: 3.50\n");
    }
    else if (marks >= 65) {
        printf("Grade: B+\n");
        printf("GPA: 3.25\n");
    }
    else if (marks >= 60) {
        printf("Grade: B\n");
        printf("GPA: 3.00\n");
    }
    else if (marks >= 55) {
        printf("Grade: B-\n");
        printf("GPA: 2.75\n");
    }
    else if (marks >= 50) {
        printf("Grade: C+\n");
        printf("GPA: 2.50\n");
    }
    else if (marks >= 45) {
        printf("Grade: C\n");
        printf("GPA: 2.25\n");
    }
    else if (marks >= 40) {
        printf("Grade: D\n");
        printf("GPA: 2.00\n");
    }
    else {
        printf("Grade: F\n");
        printf("GPA: 0.00\n");
    }

    return 0;
}
