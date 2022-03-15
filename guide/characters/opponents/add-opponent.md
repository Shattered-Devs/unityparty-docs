# Add Custom Opponent
We try to make adding a custom opponent easy. We have in-game and bundled tools to assist players with this. This guide will be instructing you on how to add a custom opponent into a bundle. At the finish, we'll continue on further with offsetting and meta editing.

# Step 1: Get the Sprites
:::info

This step will instruct on how to **separate sprites** from a **spritesheet**. If you already have individual sprites of your opponent, you may skip this step.

:::

You will need the sprites of your opponent to be individual. Unity Party is **unable** to read spritesheets with XML files. We have bundled a command-line tool with Unity Party that is simple to use. 

1. Open the `SpriteSplicer.exe` file.
2. Click the `Select Spritesheet` button and select your spritesheet.

:::caution

Make sure that the associated XML file has the **same** name and is in the **same** directory as the spritesheet.

:::

3. *(optional)* Type a new name that you want the individual sprites to have in the `Prefix Name` field.

:::info

Whether you leave the `Prefix Name` field empty or not, the sprites will be numbered based on the order in the XML file.

:::