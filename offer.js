let price=[250,645,300,900,50];
for(let k of price)
    {
        console.log("The initial price is",k);
    }
for(let i=0;i<price.length;i++)
{
    price[i]-=0.1*price[i];
}
for(let j of price)
{
    console.log("The reduced price is",j);
}