<template>
  <section id="services" class="scroll-mt-20">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    >
      <div class="card-base p-8 mb-4">
        <div class="section-label">
          <span class="font-mono text-accent-blue">~/</span> {{ $t('services.sectionLabel') }}
        </div>
        <div class="flex items-end justify-between">
          <h2 class="text-2xl font-bold text-text-primary">{{ $t('services.title') }}</h2>
          <p class="text-text-muted text-sm hidden sm:block">{{ $t('services.subtitle') }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 120 } }"
          class="card-base p-6 group hover:border-accent-blue/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
        >
          <!-- Number + icon -->
          <div class="flex items-start justify-between mb-4">
            <span class="text-3xl font-bold font-mono text-bg-border group-hover:text-accent-blue/20 transition-colors">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="p-2.5 rounded-xl" :class="service.iconBg">
              <component :is="service.icon" :size="20" :class="service.iconColor" />
            </div>
          </div>

          <h3 class="text-base font-semibold text-text-primary mb-2">{{ service.title }}</h3>
          <p class="text-text-muted text-sm leading-relaxed mb-4">{{ service.description }}</p>

          <ul class="space-y-1.5">
            <li v-for="item in service.items" :key="item"
                class="flex items-center gap-2 text-xs text-text-secondary">
              <ChevronRight :size="12" class="text-accent-blue flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Server, Smartphone, Cloud, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'

const { t } = useI18n()

const services = computed(() => [
  {
    title: t('services.s1.title'),
    description: t('services.s1.description'),
    icon: Smartphone,
    iconBg: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue',
    items: [
      t('services.s1.i1'),
      t('services.s1.i2'),
      t('services.s1.i3'),
      t('services.s1.i4'),
      t('services.s1.i5'),
      t('services.s1.i6'),
    ],
  },
  {
    title: t('services.s2.title'),
    description: t('services.s2.description'),
    icon: Cloud,
    iconBg: 'bg-accent-cyan/10',
    iconColor: 'text-accent-cyan',
    items: [
      t('services.s2.i1'),
      t('services.s2.i2'),
      t('services.s2.i3'),
      t('services.s2.i4'),
      t('services.s2.i5'),
      t('services.s2.i6'),
    ],
  },
  {
    title: t('services.s3.title'),
    description: t('services.s3.description'),
    icon: Server,
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple',
    items: [
      t('services.s3.i1'),
      t('services.s3.i2'),
      t('services.s3.i3'),
      t('services.s3.i4'),
      t('services.s3.i5'),
      t('services.s3.i6'),
    ],
  },
])
</script>

