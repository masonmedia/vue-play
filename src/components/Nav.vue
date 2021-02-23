<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            
            <b-link class="nav-link navbar-brand" to="/">mason/media</b-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-link class="nav-link" to="/about">
                    about
                </b-link>
                <b-link class="nav-link" to="/services">
                    services
                </b-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>