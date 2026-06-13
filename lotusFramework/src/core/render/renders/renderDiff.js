export default function renderDiff(diffs = []) {

    if (!Array.isArray(diffs)) {
        throw new Error(
            "Diffs must be an array."
        );
    }

    for (const diff of diffs) {

        if (!diff) {
            continue;
        }

        const element =
            document.getElementById(
                diff.nodeId
            );

        switch (diff.type) {

            case "VALUE_CHANGED":
                renderValueChanged(
                    element,
                    diff
                );
                break;

            case "ADDED":
                renderAdded(
                    element,
                    diff
                );
                break;

            case "REMOVED":
                renderRemoved(
                    element,
                    diff
                );
                break;

            case "TYPE_CHANGED":
                renderTypeChanged(
                    element,
                    diff
                );
                break;
        }
    }
}

function renderValueChanged(
    element,
    diff
) {

    if (!element) {
        return;
    }

    switch (diff.category) {

        case "styles":

            element.style[
                diff.property
            ] = diff.newValue;

            break;

        case "property":

            if (
                diff.property === "textContent"
            ) {

                element.textContent =
                    diff.newValue ?? "";

                return;
            }

            element[
                diff.property
            ] = diff.newValue;

            break;
    }
}

function renderAdded(
    element,
    diff
) {

    if (!element) {
        return;
    }

    if (
        diff.category === "event"
    ) {

        if (
            typeof diff.newValue ===
            "function"
        ) {

            element.addEventListener(
                "click",
                diff.newValue
            );
        }
    }
}

function renderRemoved(
    element,
    diff
) {

    if (!element) {
        return;
    }

    if (
        diff.category === "event"
    ) {

        if (
            typeof diff.oldValue ===
            "function"
        ) {

            element.removeEventListener(
                "click",
                diff.oldValue
            );
        }
    }
}

function renderTypeChanged(
    element,
    diff
) {

    if (!element) {
        return;
    }

    switch (diff.category) {

        case "styles":

            element.style[
                diff.property
            ] = diff.newValue;

            break;

        case "property":

            element[
                diff.property
            ] = diff.newValue;

            break;
    }
}