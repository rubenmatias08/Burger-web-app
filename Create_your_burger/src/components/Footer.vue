<template>
<footer id="footer">
    <p>Burger Project &copy; 2023</p>
</footer>
</template>

<script>

export default{
    name: 'Footer'
}
</script>

<style scoped>
#footer{
    height:170px;
    background-color: #222;
    border-top: 4px solid #111;
    color: #fcba03;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position:sticky;
    left: 0;
    bottom: 0;
    text-align: center;

}
</style>