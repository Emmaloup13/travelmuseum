<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
            <div class="container-fluid">
                <p class="navbar-brand">Travel Museum</p>
                <button class="navbar-toggler" type="button" @click="changeNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse " id="navbarColor02" style="" v-if="triggerNavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home
                                <span class="visually-hidden">(current)</span>
                            </a>
                        </li>
                    </ul>
                    <!-- <form class="d-flex">
                        <input class="form-control me-sm-2" type="search" placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>


export default {
    name: "MyHome",
    data() {
        return {
            triggerNavbar: false
        }
    },
    methods: {
        changeNavbar() {
            if (this.triggerNavbar == false) {
                this.triggerNavbar = true;
            }
            else {
                this.triggerNavbar = false;
            }
        }
    }

}

</script>


<style></style>