<button onClick={() => alert(widgetCounter)}>Count data</button>
<button onClick={() => addMultipleWidgets(uw)}>
  Add Sample Widgets
</button>
<button onClick={() => addUser("Jenna", "McKenzie")}>Add User</button>
<button
  onClick={() =>
    db
      .collection("users")
      .doc("rob-hueman")
      .delete()
  }
>
  Delete a user
</button>