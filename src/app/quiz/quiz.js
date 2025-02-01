"use client"; // Pour Next.js App Router

import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const questions = [
	{ id: "1", text: "Quelle est la capitale de la France ?" },
	{ id: "2", text: "Qui a écrit 'Les Misérables' ?" },
	{ id: "3", text: "Quel est le plus grand océan du monde ?" },
];

export default function DragDropQuiz() {
	const [items, setItems] = useState(questions);

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active.id !== over.id) {
			setItems((prev) => {
				const oldIndex = prev.findIndex((q) => q.id === active.id);
				const newIndex = prev.findIndex((q) => q.id === over.id);
				return arrayMove(prev, oldIndex, newIndex);
			});
		}
	};

	return (
		<div className="w-[40vw]">
			<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
				<SortableContext items={items} strategy={verticalListSortingStrategy}>
					<div className="space-y-2">
						{items.map((question) => (
							<SortableItem key={question.id} id={question.id} text={question.text} />
						))}
					</div>
				</SortableContext>
			</DndContext>
		</div>
	);
}

function SortableItem({ id, text }) {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className="p-4 border rounded-md shadow-md bg-primary text-white cursor-pointer"
		>
			{text}
		</div>
	);
}
