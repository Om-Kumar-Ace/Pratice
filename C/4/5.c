#include<stdio.h>

int main(){
    int n ;
    printf("Enter the no.");
    scanf("%d",&n);
    for (int i = 0; i < n; i++)
    {
        for (int k = 0; k <  n - i - 1 ; k++)
        {
            printf(" ");
        }
        for (int j = 0; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}