/*
    Program : Area of a Triangle
    Name    : itachi-re
    ID      : 123456
    Date    : 02-07-2026

    Description:
    This program calculates the area of a triangle
    using the formula: Area = 0.5 * base * height
*/

#include <stdio.h>      // Needed for printf() and scanf()

int main()
{
    float base;
    float height;
    float area;

    printf("=== Triangle Area Calculator ===\n\n");

    printf("Enter the base   : ");
    scanf("%f", &base);

    printf("Enter the height : ");
    scanf("%f", &height);

    // Input validation: a triangle can't have zero/negative base or height
    if (base <= 0 || height <= 0)
    {
        printf("\nError: Base and height must be positive numbers.\n");
        return 1;   // non-zero return = program ended due to an error
    }

    // Formula: Area = 0.5 * base * height
    area = 0.5f * base * height;

    printf("\nArea of Triangle = %.2f square units\n", area);

    return 0;
}
