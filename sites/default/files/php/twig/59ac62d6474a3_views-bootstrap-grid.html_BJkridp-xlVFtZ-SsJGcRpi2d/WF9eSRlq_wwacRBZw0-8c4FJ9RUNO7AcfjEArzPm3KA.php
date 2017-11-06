<?php

/* modules/views_bootstrap/templates/views-bootstrap-grid.html.twig */
class __TwigTemplate_ec3fcfbc6db5538153bbdfdf7afac0314ce0104ec989e41f9a9f99c1959b0301 extends Twig_Template
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
        $tags = array("set" => 16, "if" => 22, "for" => 23);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set', 'if', 'for'),
                array(),
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

        // line 16
        $context["classes"] = array(0 => "views-view-grid", 1 => $this->getAttribute(        // line 18
(isset($context["options"]) ? $context["options"] : null), "alignment", array()));
        // line 21
        echo "<div id=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["id"]) ? $context["id"] : null), "html", null, true));
        echo "\" ";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
        echo ">
  ";
        // line 22
        if (($this->getAttribute((isset($context["options"]) ? $context["options"] : null), "alignment", array()) == "horizontal")) {
            // line 23
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 24
                echo "      <div class=\"row\">
        ";
                // line 25
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["row"], "content", array()));
                foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                    // line 26
                    echo "          <div class=\"col ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_xs"]) ? $context["col_xs"] : null), "html", null, true));
                    echo " ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_sm"]) ? $context["col_sm"] : null), "html", null, true));
                    echo " ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_md"]) ? $context["col_md"] : null), "html", null, true));
                    echo " ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_lg"]) ? $context["col_lg"] : null), "html", null, true));
                    echo " ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "row_class", array()), "html", null, true));
                    echo "\">
            ";
                    // line 27
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["column"], "content", array()), "html", null, true));
                    echo "
          </div>
        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 30
                echo "      </div>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 32
            echo "  ";
        } else {
            // line 33
            echo "    <div class=\"row\">
      ";
            // line 34
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["column"]) {
                // line 35
                echo "        <div class=\"col ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_xs"]) ? $context["col_xs"] : null), "html", null, true));
                echo " ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_sm"]) ? $context["col_sm"] : null), "html", null, true));
                echo " ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_md"]) ? $context["col_md"] : null), "html", null, true));
                echo " ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["col_lg"]) ? $context["col_lg"] : null), "html", null, true));
                echo " ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["options"]) ? $context["options"] : null), "row_class", array()), "html", null, true));
                echo "\">
          ";
                // line 36
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["column"], "content", array()));
                foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                    // line 37
                    echo "            ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["row"], "content", array()), "html", null, true));
                    echo "
          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 39
                echo "        </div>

        ";
                // line 41
                if ((0 == $this->getAttribute($context["loop"], "index", array()) % $this->getAttribute((isset($context["sizes"]) ? $context["sizes"] : null), "xs", array()))) {
                    // line 42
                    echo "          <div class=\"clearfix visible-xs-block\"></div>
        ";
                }
                // line 44
                echo "
        ";
                // line 45
                if ((0 == $this->getAttribute($context["loop"], "index", array()) % $this->getAttribute((isset($context["sizes"]) ? $context["sizes"] : null), "sm", array()))) {
                    // line 46
                    echo "          <div class=\"clearfix visible-sm-block\"></div>
        ";
                }
                // line 48
                echo "
        ";
                // line 49
                if ((0 == $this->getAttribute($context["loop"], "index", array()) % $this->getAttribute((isset($context["sizes"]) ? $context["sizes"] : null), "md", array()))) {
                    // line 50
                    echo "          <div class=\"clearfix visible-md-block\"></div>
        ";
                }
                // line 52
                echo "
        ";
                // line 53
                if ((0 == $this->getAttribute($context["loop"], "index", array()) % $this->getAttribute((isset($context["sizes"]) ? $context["sizes"] : null), "lg", array()))) {
                    // line 54
                    echo "          <div class=\"clearfix visible-lg-block\"></div>
        ";
                }
                // line 56
                echo "      ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['column'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 57
            echo "    </div>
  ";
        }
        // line 59
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/views_bootstrap/templates/views-bootstrap-grid.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  200 => 59,  196 => 57,  182 => 56,  178 => 54,  176 => 53,  173 => 52,  169 => 50,  167 => 49,  164 => 48,  160 => 46,  158 => 45,  155 => 44,  151 => 42,  149 => 41,  145 => 39,  136 => 37,  132 => 36,  119 => 35,  102 => 34,  99 => 33,  96 => 32,  89 => 30,  80 => 27,  67 => 26,  63 => 25,  60 => 24,  55 => 23,  53 => 22,  46 => 21,  44 => 18,  43 => 16,);
    }

    public function getSource()
    {
        return "{#
/**
 * @file views-bootstrap-grid.html.twig
 * Default simple view template to display Bootstrap Grids.
 *
 *
 * - columns: Contains rows grouped by columns.
 * - rows: Contains a nested array of rows. Each row contains an array of
 *   columns.
 * - column_type: Contains a number (default Bootstrap grid system column type).
 *
 * @ingroup views_templates
 */
#}
{%
  set classes = [
    'views-view-grid',
    options.alignment,
  ]
%}
<div id=\"{{ id }}\" {{ attributes.addClass(classes) }}>
  {% if options.alignment  == 'horizontal' %}
    {% for row in items %}
      <div class=\"row\">
        {% for column in row.content %}
          <div class=\"col {{ col_xs }} {{ col_sm }} {{ col_md }} {{ col_lg }} {{ options.row_class }}\">
            {{ column.content }}
          </div>
        {% endfor %}
      </div>
    {% endfor %}
  {% else %}
    <div class=\"row\">
      {% for column in items %}
        <div class=\"col {{ col_xs }} {{ col_sm }} {{ col_md }} {{ col_lg }} {{ options.row_class }}\">
          {% for row in column.content %}
            {{ row.content }}
          {% endfor %}
        </div>

        {% if loop.index is divisible by (sizes.xs) %}
          <div class=\"clearfix visible-xs-block\"></div>
        {% endif %}

        {% if loop.index is divisible by (sizes.sm) %}
          <div class=\"clearfix visible-sm-block\"></div>
        {% endif %}

        {% if loop.index is divisible by (sizes.md) %}
          <div class=\"clearfix visible-md-block\"></div>
        {% endif %}

        {% if loop.index is divisible by (sizes.lg) %}
          <div class=\"clearfix visible-lg-block\"></div>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
</div>
";
    }
}
