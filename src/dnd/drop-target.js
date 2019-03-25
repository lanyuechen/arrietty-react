export default function(accepts = [], props = {}) {
  return function(widget) {

    function getData(e) {
      return JSON.parse(e.dataTransfer.getData("text"));
    }

    function handleDragEnter(e) {
      e.preventDefault();
    }

    function handleDragOver(e) {
      e.preventDefault();
    }

    function handleDrop(e) {
      e.preventDefault();
      const data = getData(e);
      if (accepts.indexOf(data.type) === -1) {
        return;
      }
      props.onDrop && props.onDrop(data, e);
    }

    return {
      ...widget,
      props: {
        ...widget.props,
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDrop: handleDrop
      }
    };
  }
}