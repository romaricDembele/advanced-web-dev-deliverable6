<script lang="ts">
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();

    //     // Check if the password is strong enough
    //     if (passwordInput.value.length < 8) {
    //     passwordError.textContent = 'Password must be at least 8 characters long';
    //     passwordInput.classList.add('border-red-500');
    //     } else {
    //     passwordError.textContent = '';
    //     passwordInput.classList.remove('border-red-500');
    //     // Submit the form
    //     form.submit();
    //     }
    // });

    export default {
        data(){

        },
        methods: {},
    }
</script>

<template>
    <main>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                <p class="text-red-500 text-xs italic">Please choose a strong password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create Account
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Already have an account? Log in
                </a>
            </div>
        </form>
    </main>
</template>
