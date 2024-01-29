<script>
  import { getContext } from 'svelte';
  import MainActivity from '@vfs/app/layout/MainActivity.svelte';
  import Tabs from '@vfs/app/layout/Tabs.svelte';
  
  const app=getContext("App");
  const activityTitle = "System Shell";
  const panelTitle = "Expression Evaluator";

  let activeTab="expr";
  
  let result;
  let expr;

  const tabs=[
    { id:"expr", label:"Code", iconComponent: app.icons["brokenImage"] },
    { id:"result", label:"Result", iconComponent: app.icons["brokenImage"] },
  ];
    
  function onSubmit(e)
  { 
  }
  
</script>

<MainActivity title={activityTitle}>
  <Tabs data={tabs} bind:active={activeTab} />
  {#if activeTab=="expr"}
    <div class="flex flex-column w-100">
      <div class="mb-3">
        <label for="exprArea" class="form-label">Expression</label>
        <textarea id="exprArea" class="form-control" rows="25" bind:value={expr}/>
      </div>
      <div class="mb-3">
        <button class="submit btn btn-primary" on:click|preventDefault={onSubmit}>
          Eval
        </button>
      </div>
    </div>
  {:else if activeTab=="result"}
    <div class="flex flex-column w-100">
      <div class="mb-3">
        <label for="exprArea" class="form-label">Result</label>
        <textarea id="exprArea" class="form-control" rows="25" bind:value={result} readonly/>
      </div>
    </div>
  {/if}
  
</MainActivity>

<style>
  #exprArea
  { font-family: monospace;
  }
</style>

