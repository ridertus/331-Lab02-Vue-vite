<template>
    <div class="event-class">
        <div class="event-cart">
            <span>@{{ student?.name }} {{ student?.surname }}</span>
            <h4>{{ student?.gpa }}</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { studentItem } from '@/type';
import type { PropType } from 'vue'
const props = defineProps({
   student: {
    type: Object as PropType<studentItem>,
    require: true
   }
})
</script>

<style scoped>
.event-cart {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.event-cart:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>