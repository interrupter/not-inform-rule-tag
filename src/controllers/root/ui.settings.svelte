<script>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    export let value;
    export let readonly;
    export let disabled;

    let newTag = "";

    function deleteTag(e) {
        e && e.preventDefault();
        let tag = e.currentTarget.dataset.tag;
        if (value.tags.includes(tag)) {
            value.tags.splice(value.tags.indexOf(tag), 1);
            value.tags = value.tags;
            value = value;
            dispatch("change", { _id: value._id, value });
        }
        return false;
    }

    function addTag() {
        if (!value.tags.includes(newTag)) {
            value.tags.push(newTag + "");
            value.tags = value.tags;
            value = value;
            newTag = "";
            dispatch("change", { _id: value._id, value });
        }
    }
</script>

{#if value}
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label" for="edit-sink-rule-{value._id}-tags"
                >Метки</label
            >
        </div>
        <div class="field-body">
            <div class="field" id="edit-sink-rule-{value._id}-tags">
                <p class="control is-narrow">
                    {#each value.tags as tag, index}
                        <span class="mx-1 tag is-info"
                            >{tag}<button
                                data-tag={tag}
                                class="delete is-small"
                                on:click={deleteTag}
                            /></span
                        >
                    {/each}
                </p>
            </div>
            {#if !readonly && !disabled}
                <div class="field has-addons">
                    <p class="control is-narrow">
                        <input
                            class="input is-success"
                            type="text"
                            placeholder="новая метка"
                            bind:value={newTag}
                            {readonly}
                            {disabled}
                        />
                    </p>
                    <div class="control is-small">
                        <button class="button is-info" on:click={addTag}
                            >Добавить</button
                        >
                    </div>
                </div>
            {/if}
        </div>
    </div>{/if}
