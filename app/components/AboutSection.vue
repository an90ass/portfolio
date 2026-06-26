<template>
  <section id="about" class="scroll-mt-20">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="grid grid-cols-1 lg:grid-cols-3 gap-4"
    >
      <!-- About text -->
      <div class="lg:col-span-2 card-base p-8">
        <div class="section-label">
          <span class="font-mono text-accent-blue">~/</span> {{ $t('about.sectionLabel') }}
        </div>
        <h2 class="text-2xl font-bold text-text-primary mb-4">{{ $t('about.title') }}</h2>

        <div class="space-y-3 text-text-secondary leading-relaxed text-sm">
          <p v-html="p1Formatted"></p>
          <p v-html="p2Formatted"></p>
          <p v-html="p3Formatted"></p>
        </div>

        <!-- Traits -->
        <div class="flex flex-wrap gap-2 mt-6">
          <span v-for="trait in traits" :key="trait" class="tech-badge">{{ trait }}</span>
        </div>
      </div>

      <!-- Summary card -->
      <div class="card-base p-6 flex flex-col gap-5">
        <div>
          <div class="section-label">{{ $t('about.summaryTitle') }}</div>
          <ul class="space-y-3 mt-2">
            <li v-for="info in summary" :key="info.label" class="flex items-center justify-between text-sm">
              <span class="text-text-muted">{{ info.label }}</span>
              <span class="text-text-primary font-medium">{{ info.value }}</span>
            </li>
          </ul>
        </div>

        <div class="border-t border-bg-border pt-4">
          <div class="section-label">{{ $t('about.interestsTitle') }}</div>
          <div class="flex flex-wrap gap-2 mt-2">
            <span v-for="i in interests" :key="i" class="tech-badge">{{ i }}</span>
          </div>
        </div>

        <!-- Social links -->
        <div class="border-t border-bg-border pt-4 flex gap-3">
          <a v-for="link in socials" :key="link.href" :href="link.href" target="_blank"
             class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-border text-text-secondary
                    hover:text-text-primary hover:bg-bg-hover transition-all duration-200 text-xs font-medium">
            <component :is="link.icon" :size="13" />
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

// Keep highlights in description
const p1Formatted = computed(() => {
  const text = t('about.p1')
  return text
    .replace('2+ years', '<strong class="text-text-primary">2+ years</strong>')
    .replace('سنتين', '<strong class="text-text-primary">سنتين</strong>')
    .replace('2+ yıl', '<strong class="text-text-primary">2+ yıl</strong>')
})

const p2Formatted = computed(() => {
  const text = t('about.p2')
  return text
    .replace('Clean Architecture', '<strong class="text-text-primary">Clean Architecture</strong>')
    .replace('Python', '<strong class="text-text-primary">Python</strong>')
    .replace('robust, maintainable', '<strong class="text-text-primary">robust, maintainable</strong>')
    .replace('متينة وسهلة الصيانة', '<strong class="text-text-primary">متينة وسهلة الصيانة</strong>')
    .replace('güçlü ve sürdürülebilir', '<strong class="text-text-primary">güçlü ve sürdürülebilir</strong>')
})

const p3Formatted = computed(() => {
  const text = t('about.p3')
  return text
    .replace('high-quality mobile solutions', '<strong class="text-text-primary">high-quality mobile solutions</strong>')
    .replace('عالية الجودة', '<strong class="text-text-primary">عالية الجودة</strong>')
    .replace('yüksek kaliteli mobil çözümler', '<strong class="text-text-primary">yüksek kaliteli mobil çözümler</strong>')
})

const traits = computed(() => {
  const raw = tm('about.traits')
  return Array.isArray(raw) ? raw.map(item => rt(item)) : []
})

const interests = computed(() => {
  const raw = tm('about.interests')
  return Array.isArray(raw) ? raw.map(item => rt(item)) : []
})

const summary = computed(() => [
  { label: t('about.experienceLabel'),   value: t('about.experienceValue') },
  { label: t('about.locationLabel'),     value: t('about.locationValue') },
  { label: t('about.nationalityLabel'),  value: t('about.nationalityValue') },
  { label: t('about.statusLabel'),       value: t('about.statusValue') },
  { label: t('about.remoteLabel'),       value: t('about.remoteValue') },
])

const socials = [
  { href: 'https://github.com/an90ass/',                  icon: Github,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anas-a-12815124b/', icon: Linkedin, label: 'LinkedIn' },
]
</script>

