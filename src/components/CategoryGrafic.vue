<script setup lang="ts">
import type { CategoryAmounts } from '../types/Category';
import { type Ref, ref, onMounted } from 'vue';
import { getCategoryAmounts } from '../stores/Category';
import Chart from 'chart.js/auto';


let categoryAmounts: CategoryAmounts[] = [];


onMounted(async () => {
    categoryAmounts = await getCategoryAmounts();

    
    const ctx:any = document.getElementById('myChart');

    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: teste(categoryAmounts),
                datasets: [{
                    label: '# of Votes',
                    data: teste2(categoryAmounts),
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});

function teste(data : CategoryAmounts[]):String[]{
    let a :String[] = [];

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        a.push(element.name);
        
    }
    
    return a;
}

function teste2(data : CategoryAmounts[]):Number[]{
    let a :Number[] = [];

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        a.push(element.amount);
        
    }
    
    return a;
}
</script>

<template>
    <div>
        <canvas id="myChart"  width="400" height="400"></canvas>
    </div>
</template>