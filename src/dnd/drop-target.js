export default function(accepts = [], props = {}) {
  return function(widget) {

    function getData(e) {
      return JSON.parse(e.dataTransfer.getData("text"));
    }

    function handleDragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
      props.onDragEnter && props.onDragEnter(e);
    }

    function handleDragLeave(e) {
      e.stopPropagation();
      e.preventDefault();
      props.onDragLeave && props.onDragLeave(e);
    }

    function handleDragOver(e) {
      e.preventDefault();
      props.onDragOver && props.onDragOver(e);
    }

    function handleDrop(e) {
      e.stopPropagation();
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
        onDragLeave: handleDragLeave,
        onDragOver: handleDragOver,
        onDrop: handleDrop
      }
    };
  }
}