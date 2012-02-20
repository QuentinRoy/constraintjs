/*
   Graph: A way of keeping track of nodes and edges

   Depends on:
	core.js
	array_utils.js
*/
(function(cjs) {
var _ = cjs._;

//Assume that nodes are part of at most one graph ever
var Node = function() {
	this.outgoingEdges = [];
	this.incomingEdges = [];
};

(function(my) {
	var proto = my.prototype;

	proto.addOutgoingEdge = function(edge) {
		this.outgoingEdges.push(edge);
	};
	proto.addIncomingEdge = function(edge) {
		this.incomingEdges.push(edge);
	};

	proto.removeOutgoingEdge = function(edge) {
		_.remove(this.outgoingEdges, edge);
	};
	proto.removeIncomingEdge = function(edge) {
		_.remove(this.incomingEdges, edge);
	};

	proto.getOutgoing = function() {
		return this.outgoingEdges;
	};
	proto.getIncoming = function() {
		return this.incomingEdges;
	};

	proto.destroy = function() {
		this.incomingEdges.forEach(function(edge) {
			var fromNode = edge.fromNode;
			fromNode.removeOutgoingEdge(edge);
		});
		_.clear(this.incomingEdges);

		this.outgoingEdges.forEach(function(edge) {
			var toNode = edge.toNode;
			toNode.removeIncomingEdge(edge);
		});
		_.clear(this.outgoingEdges);
	};

	proto.pointsAt = function(recursive) {
		recursive = recursive === true;
		var rv = []
			, i;
		for(i = 0; i<this.outgoingEdges.length; i++) {
			var outgoingEdge = this.outgoingEdges[i];
			var node = outgoingEdge.toNode;

			if(!_.contains(rv, node)) {
				rv.push(node);
				if(recursive) {
					rv = _.unique(rv, node.pointsAt(true));
				}
			}
		}
		return rv;
	};

	proto.pointsAtMe = function(recursive) {
		recursive = recursive === true;
		var rv = []
			, i;
		for(i = 0; i<this.incomingEdges.length; i++) {
			var incomingEdge = this.incomingEdges[i];
			var node = incomingEdge.fromNode;

			if(!_.contains(rv, node)) {
				rv.push(node);
				if(recursive) {
					rv = _.unique(rv, node.pointsAtMe(true));
				}
			}
		}
		return rv;
	};

	proto.getEdgeTo = function(toNode) {
		var i;
		for(i = 0; i<this.outgoingEdges.length; i++) {
			var outgoingEdge = this.outgoingEdges[i];
			if(outgoingEdge.fromNode === this && outgoingEdge.toNode === toNode) { return outgoingEdge; }
		}
		return null;
	};
	proto.hasEdgeTo = function(toNode) {
		return this.getEdgeTo(toNode)!==null;
	};
}(Node));

var Edge = function(fromNode, toNode) {
	this.fromNode = fromNode;
	this.toNode = toNode;
};

var Graph = function() {
};

(function(my) {
	var proto = my.prototype;
	proto.create_node = function() {
		var node = new Node();
		this.addNode(node);
		return node;
	};

	proto.hasEdge = function(arg0, arg1) {
		var fromNode, toNode, edge;
		if(arg0 instanceof Edge) {
			edge = arg0;
			fromNode = edge.fromNode;
			toNode = edge.toNode;
		}
		else {
			fromNode = arg0;
			toNode = arg1;
		}
		return fromNode.hasEdgeTo(toNode);
	};
	proto.getEdge = function(fromNode, toNode) {
		return fromNode.getEdgeTo(toNode);
	};
	proto.doAddEdge = function(edge) {
		edge.fromNode.addOutgoingEdge(edge);
		edge.toNode.addIncomingEdge(edge);

		return edge;
	};
	proto.addEdge = function(arg0, arg1){
		var fromNode, toNode, edge;
		if(arg0 instanceof Edge) {
			edge = arg0;
			fromNode = edge.fromNode;
			toNode = edge.toNode;
		}
		else {
			fromNode = arg0;
			toNode = arg1;
			edge = new Edge(fromNode, toNode);
		}
		if(!this.hasEdge(fromNode, toNode)) {
			return this.doAddEdge(edge);
		}
		return null;
	};

	proto.removeEdge = function(fromNode, toNode) {
		var edge = this.getEdge(fromNode, toNode);
		if(edge!==null) {
			fromNode.removeOutgoingEdge(edge);
			toNode.removeIncomingEdge(edge);
		}
		return edge;
	};

	proto.hasNode = function(node) {
		return node instanceof Node;
	};

	proto.addNode = function() { };

	proto.removeNode = function(node) {
		node.destroy();
	};
}(Graph));


cjs.define("graph", function() {
	return new Graph();
});
cjs.type("node", Node);
cjs.type("edge", Edge);

}(cjs));
