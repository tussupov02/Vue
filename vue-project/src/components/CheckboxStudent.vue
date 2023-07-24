<template>
    <div>
        <label :for="String(props.id)">{{ props.name }}</label>
        <input type="checkbox" :id="String(props.id)" :name="props.name" @change="selectValue">
    </div>
</template>

<script setup lang="ts">
interface Props {
    id: number
    adding?: string
    name: string
    modelValue: number[]
}
const props = defineProps<Props>()

interface Emits {
    (e: 'update:modelValue', arr: number[]): void
}
const emits = defineEmits<Emits>();

const selectValue = () => {
    if (props.modelValue.includes(props.id)) {
        emits('update:modelValue', props.modelValue.filter((item: number) => item !== props.id))
    } else {
        emits('update:modelValue', [...props.modelValue, props.id]);
    }
}
</script>

<style scoped>

</style>