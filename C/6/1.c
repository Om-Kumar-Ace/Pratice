#include<stdio.h>

int main(){
    for (int i = 0; i < 6; i++)
    {
        for (int j = 0; j < 6; j++)
        {
            if (i==0||j==0||j==5||i==5)
            {
                printf(" *");
            }
            else
            {
                printf("  ");
            }
            
            
        }
        
        
        printf("\n");
    }
    
    return 0;
}