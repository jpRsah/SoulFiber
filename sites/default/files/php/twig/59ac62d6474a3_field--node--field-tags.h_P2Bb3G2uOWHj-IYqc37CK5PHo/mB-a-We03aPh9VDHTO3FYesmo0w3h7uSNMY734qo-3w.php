<?php

/* themes/integrity/templates/field--node--field-tags.html.twig */
class __TwigTemplate_0505f6e1e9c71b16ef3071a5ee4a8119570762262807d69ceb01ab562a373197 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 24, "if" => 42, "for" => 46);
        $filters = array("clean_class" => 24);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'if', 'for'),
                array('clean_class'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 24
        $context["field_name_class"] = \Drupal\Component\Utility\Html::getClass((isset($context["field_name"]) ? $context["field_name"] : null));
        // line 26
        $context["classes"] = array(0 => "field", 1 => ((("field-" . \Drupal\Component\Utility\Html::getClass(        // line 28
(isset($context["entity_type"]) ? $context["entity_type"] : null))) . "--") . (isset($context["field_name_class"]) ? $context["field_name_class"] : null)), 2 => ("field-name-" .         // line 29
(isset($context["field_name_class"]) ? $context["field_name_class"] : null)), 3 => ("field-type-" . \Drupal\Component\Utility\Html::getClass(        // line 30
(isset($context["field_type"]) ? $context["field_type"] : null))), 4 => ("field-label-" .         // line 31
(isset($context["label_display"]) ? $context["label_display"] : null)), 5 => "clearfix");
        // line 36
        $context["title_classes"] = array(0 => "field-label", 1 => (((        // line 38
(isset($context["label_display"]) ? $context["label_display"] : null) == "inline")) ? ("inline") : ("")));
        // line 41
        echo "<div";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
        echo ">
  ";
        // line 42
        if ( !(isset($context["label_hidden"]) ? $context["label_hidden"] : null)) {
            // line 43
            echo "    <h3";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["title_attributes"]) ? $context["title_attributes"] : null), "addClass", array(0 => (isset($context["title_classes"]) ? $context["title_classes"] : null)), "method"), "html", null, true));
            echo ">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</h3>
  ";
        }
        // line 45
        echo "  <ul";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["content_attributes"]) ? $context["content_attributes"] : null), "addClass", array(0 => "links", 1 => "field-items"), "method"), "html", null, true));
        echo ">
    ";
        // line 46
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 47
            echo "      <li";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "attributes", array()), "html", null, true));
            echo ">";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "content", array()), "html", null, true));
            echo "</li>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 49
        echo "  </ul>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/integrity/templates/field--node--field-tags.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  89 => 49,  78 => 47,  74 => 46,  69 => 45,  61 => 43,  59 => 42,  54 => 41,  52 => 38,  51 => 36,  49 => 31,  48 => 30,  47 => 29,  46 => 28,  45 => 26,  43 => 24,);
    }

    public function getSource()
    {
        return "{#
/**
 * @file
 * Bartik theme override for taxonomy term fields.
 *
 * Available variables:
 * - attributes: HTML attributes for the containing element.
 * - label_hidden: Whether to show the field label or not.
 * - title_attributes: HTML attributes for the label.
 * - label: The label for the field.
 * - content_attributes: HTML attributes for the content.
 * - items: List of all the field items. Each item contains:
 *   - attributes: List of HTML attributes for each item.
 *   - content: The field item's content.
 * - entity_type: The entity type to which the field belongs.
 * - field_name: The name of the field.
 * - field_type: The type of the field.
 * - label_display: The display settings for the label.
 *
 * @see template_preprocess_field()
 * @see bartik_preprocess_field()
 */
#}
{% set field_name_class = field_name|clean_class %}
{%
  set classes = [
    'field',
    'field-' ~ entity_type|clean_class ~ '--' ~ field_name_class,
    'field-name-' ~ field_name_class,
    'field-type-' ~ field_type|clean_class,
    'field-label-' ~ label_display,
    'clearfix',
  ]
%}
{%
  set title_classes = [
    'field-label',
    label_display == 'inline' ? 'inline',
  ]
%}
<div{{ attributes.addClass(classes) }}>
  {% if not label_hidden %}
    <h3{{ title_attributes.addClass(title_classes) }}>{{ label }}</h3>
  {% endif %}
  <ul{{ content_attributes.addClass('links', 'field-items') }}>
    {% for item in items %}
      <li{{ item.attributes }}>{{ item.content }}</li>
    {% endfor %}
  </ul>
</div>
";
    }
}
