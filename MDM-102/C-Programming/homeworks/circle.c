/*
    Program : Area of a Circle
    Name    : x
    ID      : 123456
    Date    : 02-07-2026

    Description:
    This program calculates the area of a circle
    using the formula: Area = PI * r * r
*/

#include <stdio.h>      // Needed for printf() and scanf()

#define PI 3.14f        // Symbolic constant instead of a "magic number"

int main()
{
    float radius;
    float area;

    printf("=== Circle Area Calculator ===\n\n");

    printf("Enter the radius : ");
    scanf("%f", &radius);

    // Input validation: radius can't be zero or negative
    if (radius <= 0)
    {
        printf("\nError: Radius must be a positive number.\n");
        return 1;
    }

    // Formula: Area = PI * radius * radius
    area = PI * radius * radius;

    printf("\nArea of Circle = %.2f square units\n", area);

    return 0;
}
