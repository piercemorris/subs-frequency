<template>
  <div class="container">
    <form>
      <input 
        id="file" 
        type="file" 
        name="file"
        accept=".ass,.srt"
        @change="handleChange"
        class="custom-file-input"
        multiple
      />
      <label for="file">Choose a file</label>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      console.log(e.target.files[0].name)
    }
  }
}
</script>

<style lang="scss" scoped>

.custom-file-input {
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	z-index: -1;
}

.custom-file-input + label {
  display: inline-block;
  padding: 1rem;
  font-size: 1.25em;
  border-radius: 8px;
  color: black;
  background-color: beige;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.custom-file-input:focus + label,
.custom-file-input + label:hover {
    background-color: coral;
}

.custom-file-input:focus + label {
	outline: 1px dotted #000;
	outline: -webkit-focus-ring-color auto 5px;
}

</style>