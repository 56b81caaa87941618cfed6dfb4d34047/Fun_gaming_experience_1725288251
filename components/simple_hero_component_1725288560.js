<!--
INSTRUCTION: Summary: The hero component contains the following two parts:
INSTRUCTION: - To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
INSTRUCTION: - To the right: There is an image relevant to the app.
-->

<template>
    <section id="hero-section" class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex-1">
        <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <!-- Left section containing title and buttons -->
            <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                <div id="hero-title-container-text" class="flex">
                    <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Welcome to Your Colorful Adventure</h1>
                </div>
                <div id="hero-subtitle-container" class="flex">
                    <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-yellow-200 lg:mb-8 md:text-lg lg:text-xl">Dive into a World of Vibrant Fun and Excitement</p>
                </div>
                <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div id="hero-button-1-container" class="flex">
                        <a id="hero-button-1" href="#" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-purple-600 bg-yellow-300 rounded-lg sm:w-auto hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 transition-all duration-300 ease-in-out transform hover:scale-105">Play Now</a>
                    </div>
                    <div id="hero-button-2-container" class="flex">
                        <a id="hero-button-2" href="#" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-yellow-300 bg-purple-600 rounded-lg sm:w-auto hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105">Learn More</a>
                    </div>
                    <div id="hero-button-3-container" class="flex">
                        <a id="hero-button-3" href="#" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-purple-600 bg-green-300 rounded-lg sm:w-auto hover:bg-green-400 focus:ring-4 focus:ring-green-200 transition-all duration-300 ease-in-out transform hover:scale-105">Customize Character</a>
                    </div>
                </div>
            </div>
            <!-- Right section containing image -->
            <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-lg shadow-lg">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SimpleHeroComponent",
    data() {
        return {
            expanded: false,
            tab: null,
            characters: [
                { id: 1, name: 'Character 1', image: './images/character1.png' },
                { id: 2, name: 'Character 2', image: './images/character2.png' },
                { id: 3, name: 'Character 3', image: './images/character3.png' }
            ],
            selectedCharacter: null
        };
    },
    methods: {
        // Character selection method
        selectCharacter(character) {
            this.selectedCharacter = character;
            console.log(`Selected character: ${character.name}`);
        }
        // End of character selection method
    }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
