<template>
    <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 bg-dark footer-dark"
    >
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24">
                    <use xlink:href="#bootstrap" />
                </svg>
            </a>
            <span>&copy; {{ projectName }} 2022-2024</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
                <a class="footer-link" :href="projectGit" target="_blank"><i class="fa-brands fa-github"></i></a>
            </li>
            <li class="ms-3">
                <a class="footer-link" href="#"></a>
            </li>
        </ul>
    </footer>
</template>

<script setup>
const props = defineProps([
    "projectName", "projectGit", "authorGit"
]);

const name = 'Footer';
</script>

<style scoped>
.footer-dark,
.footer-link {
    color:antiquewhite;
}
</style>