---
uniqueName: example
title: Example
isActive: true
sections:
  - sectionTitle: Test examples
    isActive: true
    pages:
      - pageTitle: Text style
        isActive: true
        body: |-
          # Header 1

          ## Header 2

          **Bold text**

          *Italic text.*

          [test url](www.google.com)

          * bullet 1
          * bullet 2

          1. number 1.
          2. number 2..
      - pageTitle: Table
        isActive: true
        body: |-
          # Table

          | column 1 | column 2 |
          | -------  | -------- |
          | cell 11  | cell 12  |
          | cell 12  | cell 22  |
      - pageTitle: Code block
        isActive: true
        body: |-
          Code block

          ```javascript
          "2" - 1; // output: 1
          10 - "10"; // output: 0
          "hello" - "there"; // output: NaN
          null - undefined; // output: NaN
          ```
      - pageTitle: Image
        isActive: true
        body: |-
          # Image

          Draft images do not appear in preview

          ![Test image alt](/img/example/value.png "test image title")
      - pageTitle: Gif
        isActive: true
        body: |-
          # Gif

          Draft images do not appear in preview

          ![gif tag](/img/example/coding.gif "gif title")
      - pageTitle: Sandbox as iframe
        isActive: true
        body: |-
          # Sandbox as iframe

          It may not work in preview mode

          [Example 1](codesandbox-embed://example_1)
      - pageTitle: Sandbox as url
        isActive: true
        body: |-
          # Sandbox as url

          It may not work in preview mode

          [Example 1](codesandbox-link://example_1)
  - sectionTitle: Enrich RTE Test
    isActive: true
    pages:
      - pageTitle: Image with dimentions
        isActive: true
        body: >-
          # This is a custom image element


          <div style="text-align: center;"><img src="" alt="" title="" style="width: unset; height: unset;"></div>
---
