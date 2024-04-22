<script>
export default {
  functional: true,
  props: ["type", "content"],
  render: function (createElement, context) {
    return createElement("span", [
      createElement(
        context.props.type, // tag name
        context.props.content // tag text
      ),
    ]);
  },
};
</script>
