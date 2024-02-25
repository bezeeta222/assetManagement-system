<template>
  <header
    class="sticky h-14 top-0 z-40 dark:border-b border-gray-800 shadow-sm backdrop-blur"
  >
    <UContainer class="h-full w-full flex items-center justify-between gap-x-4">
      <div class="flex items-center gap-12">
        <div class="flex items-center gap-x-2">
          <UButton
            class="font-semibold font-display tracking-wide"
            variant="ghost"
            color="black"
            to="/"
            :padded="false"
          >
            <span>
              Idham Broker
            </span>
          </UButton>
        </div>

        <nav class="space-x-6 hidden md:block">
        </nav>
      </div>

      <div class="flex items-center gap-x-1">
        <UButton
          external
          to="https://github.com/bezeeta222/assetManagement-system.git"
          target="_blank"
          color="gray"
          variant="ghost"
          icon="i-mdi-github"
        />
        <ThemeToggle />

        <div class="ml-2 flex">
          <UserDropdown />
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts"></script>
